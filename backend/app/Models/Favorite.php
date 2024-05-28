<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    use HasFactory;

    protected $table = 'favorite';

    protected $fillable = [
        'user_id',
        'image_id',
    ];

    protected $guarded = [
        'id',
        'created_at',
        'updated_at',
    ];
}
