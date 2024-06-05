<?php

namespace App\ViewModels;

use App\ViewModels\ViewModel;
use Illuminate\Support\Facades\Log;

class ImagesViewModel extends ViewModel
{
    private $image;
    private $favorite;

    public function __construct($image, $favorite)
    {
        $this->image = $image;
        $this->favorite = $favorite;
    }

    public static function collect($images, $favorites)
    {
        return $images->map(function ($image) use ($favorites) {
            $favorite = $favorites->firstWhere('image_id', $image->id);

            return new self($image, $favorite);
        });
    }

    public function toMap(): array
    {
        return [
            'id' => $this->image->id,
            'image_url' => 'https://images.lgtm-generator-with-emoji.com/' . $this->image->image_url,
            'is_favorite' => $this->favorite ? true : false,
        ];
    }
}
