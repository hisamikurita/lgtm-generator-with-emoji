<?php
namespace App\Services;

use App\Repositories\UserRepository;

class UserService
{

    // HTTPリクエストからユーザーIDを取得
    public function getUserId($request_user_id)
    {
        $image = UserRepository::findUserId($request_user_id);

        return $image;
    }

    // ユーザーIDを作成
    public function createUserId($user_id)
    {
        $user = UserRepository::createUserId($user_id);

        return $user;
    }
}
