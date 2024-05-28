<?php

namespace App\Repositories;

use App\Models\Favorite;

class FavoriteRepository
{
    public static function findFavoriteAllImage($user_id)
    {
        $favorite_all_image = Favorite::where('user_id', '=', $user_id)->get();

        return $favorite_all_image;
    }

    public static function findFavoriteAllImageId($user_id)
    {
      $db_images_ids = $db_images_ids = Favorite::where('user_id', '=', $user_id)
                                        ->orderBy('created_at', 'desc')
                                        ->pluck('image_id');
        return $db_images_ids;
    }
}
