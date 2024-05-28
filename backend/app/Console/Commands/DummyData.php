<?php

namespace App\Console\Commands;

use App\Models\Images;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class DummyData extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'dummy-data {count=10}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $count = (int)$this->argument("count");

        // ストレージから適当な画像を取得
        // $dummy = Storage::disk('s3')->get('0d2466e8968a8feff6a8ce037b8b5042.jpeg');

        // Log::info($dummy);
        // データベースに保存を10回繰り返す
        for ($i = 0; $i < $count; $i++) {
            // データベースに保存
            Images::create([
                'image_url' => '0d2466e8968a8feff6a8ce037b8b5042.jpeg',
            ]);
        }
    }
}
