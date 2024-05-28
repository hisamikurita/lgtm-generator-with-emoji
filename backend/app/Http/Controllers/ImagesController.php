<?php

namespace App\Http\Controllers;

use App\Models\Images;
use App\Services\FavoriteService;
use App\Services\ImagesService;
use App\Services\UserService;
use App\ViewModels\ImagesViewModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class ImagesController extends Controller
{
    public function index()
    {
        $request_user_id = request('userId');

        $images = new ImagesService();
        $allImages = $images->getAllImage();

        $user = new UserService();
        $user_id = $user->getUserId($request_user_id);

        $favorite = new FavoriteService();
        $favoriteImages = $favorite->getFavoriteAllImage($user_id);

        $ivm = ImagesViewModel::collect($allImages, $favoriteImages);

        return response()->json($ivm->toArray(), 201);

        // TEST
        // $images = DB::table('images')->paginate(5);
        // return response()->json($images->items(), 201);
    }

    public function store(Request $request)
    {
        $post = Images::create([
            'image_url' => $request->image_url,
        ]);

        return response()->json($post, 201);
    }
}
