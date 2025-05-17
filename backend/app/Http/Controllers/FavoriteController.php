<?php

namespace App\Http\Controllers;
use App\Models\User;
use App\Models\Favorite;
use App\Services\FavoriteService;
use App\Services\ImagesService;
use App\Services\UserService;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class FavoriteController extends Controller
{
    public function index()
    {
        $request_user_id = request('userId');

        $images = new ImagesService();

        $user = new UserService();
        $user_id = $user->getUserId($request_user_id);

        // $db_user_id = DB::table('user')->where('user_id', '=', $request_user_id)->value('id');
        // $db_images_ids = DB::table('favorite')->where('user_id', '=', $db_user_id)->orderBy('created_at', 'desc')->pluck('image_id');

        $favorite = new FavoriteService();
        $favorite_image_ids = $favorite->getFavoriteAllImageId($user_id);

        // // 画像IDから画像URLを取得
        // $images = DB::table('images')
        //             ->whereIn('id', $db_images_ids)
        //             ->orderByRaw("FIELD(id, " . implode(',', $db_images_ids->toArray()) . ")") // creaated_atを保持したままにするための処理
        //             ->get();
        $all_images = $images->getImageById($favorite_image_ids);

        Log::info($all_images);

        $all_images->map(function($image) {
            $image->image_url = 'https://images.lgtm-generator-with-emoji.com/'  . $image->image_url;
            $image->is_favorite = true;
        });

        return response()->json($all_images);
    }

    public function store(Request $request)
    {
        $request_user_id = $request->user_id;
        $request_image_id = $request->image_id;

        $db_user_id = DB::table('user')->where('user_id', '=', $request_user_id)->value('id');

        // ユーザーTABLEから割り振られたIDと画像IDを受け取ってお気に入りTABLEに保存
        // 既にお気に入り登録されている場合は該当のレコードを削除
        $isFavorite = DB::table('favorite')
                        ->where('user_id', '=', $db_user_id)
                        ->where('image_id', '=', $request_image_id)
                        ->exists();

        if($isFavorite) {
            $post = DB::table('favorite')
                ->where('user_id', '=', $db_user_id)
                ->where('image_id', '=', $request_image_id)
                ->delete();

            return response()->json($post, 201);
        }
        else {
            $post = Favorite::create([
                'user_id' => $db_user_id,
                'image_id' => $request_image_id,
            ]);

            return response()->json($post, 201);
        }
        return response()->json($isFavorite);
    }
}
