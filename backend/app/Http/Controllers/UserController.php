<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\UserService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    public function store(Request $request)
    {
        $user = new UserService;
        $user_id = $user->getUserId($request->user_id);

        // 既に登録されているユーザーIDの場合は何もしない
        if ($user_id) {
            return response()->json([
                'message' => 'User already exists',
            ], 200);
        }
        else {
            $post = $user->createUserId($request->user_id);
            return response()->json($post, 201);
        }
    }
}
