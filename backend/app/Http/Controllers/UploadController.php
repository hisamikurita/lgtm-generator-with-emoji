<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\Images;
use Illuminate\Support\Facades\Log;

class UploadController extends Controller
{
    public function store(Request $request)
    {
        // try {
            // リクエストからファイルを取得
            $base64 = $request->get('image');

            // "data:{拡張子}"と"base64,"で区切る
            list($fileInfo, $fileData) = explode(';', $base64);

            // 拡張子を取得
            $extension = explode('/', $fileInfo)[1];

            // $fileDataにある"base64,"を削除する
            list(, $fileData) = explode(',', $fileData);

            // base64をデコード
            $fileData = base64_decode($fileData);

            // ランダムなファイル名生成
            $fileName = md5(uniqid(rand(), true)) . ".$extension";

            // S3 に保存する
            $isPut = Storage::disk('s3')->put($fileName, $fileData);

            // データベースに保存
            Images::create([
                'image_url' => $fileName,
            ]);

            // データベースに保存するためのパスを返す
            return response()->json([
                'message' => 'Successfully uploaded image!',
                'put' => $isPut,
                'image_url' => Storage::disk('s3')->url($fileName),
            ], 201);
    }
}
