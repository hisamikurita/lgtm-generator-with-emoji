<?php
namespace App\Services;

use App\Repositories\FavoriteRepository;

class FavoriteService
{

    // ユーザーIDからお気に入り画像を取得
    public function getFavoriteAllImage($user_id)
    {
        $image = FavoriteRepository::findFavoriteAllImage($user_id);

        return $image;
    }

    // ユーザーIDからお気に入り画像IDを取得
    public function getFavoriteAllImageId($user_id)
    {
        $image = FavoriteRepository::findFavoriteAllImageId($user_id);

        return $image;
    }
}
