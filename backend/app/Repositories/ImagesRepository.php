<?php

namespace App\Repositories;

use App\Models\Images;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class ImagesRepository
{
    public static function findAllImage()
    {
        $images = Images::orderBy('id', 'desc')->paginate(12)->items();

        return collect($images);
    }

    public static function findImageById($image_id)
    {
        $image = Images::whereIn('id', $image_id)
                    ->orderByRaw("FIELD(id, " . implode(',', $image_id->toArray()) . ")") // creaated_atを保持したままにするための処理
                    ->paginate(12)
                    ->items();

        return collect($image);
    }
}
