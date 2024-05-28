<?php
namespace App\Services;

use App\Repositories\ImagesRepository;

class ImagesService
{

    // 画像一覧を取得
    public function getAllImage()
    {
        $image = ImagesRepository::findAllImage();

        return $image;
    }

    // 画像IDから画像を取得
    public function getImageById($image_id)
    {
        $image = ImagesRepository::findImageById($image_id);

        return $image;
    }
}
