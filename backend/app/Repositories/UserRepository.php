<?php

namespace App\Repositories;

use App\Models\User;

class UserRepository
{
    public static function findUserId($request_user_id)
    {
        $db_user_id = User::where('user_id', '=', $request_user_id)->value('id');

        return $db_user_id;
    }

    public static function createUserId($user_id)
    {
        $user = User::create([
            'user_id' => $user_id,
        ]);

        return $user;
    }
}
