<?php

namespace App\ViewModels;

use Illuminate\Contracts\Support\Arrayable;

/**
 * Class ViewModel ViewModelのベースクラス
 * @package App\ViewModels
 */
abstract class ViewModel implements Arrayable
{
    /**
     * データをキーバリューのarrayに変換します
     * @return array
     */
    abstract public function toMap(): array;

    /**
     * 再帰的にarrayに変換します
     * @return array
     */
    final public function toArray(): array
    {
        $result = $this->toMap();
        foreach ($result as $key => $value) {
            if ($value instanceof Arrayable) {
                $result[$key] = $value->toArray();
            } elseif (is_array($value)) {
                $result[$key] = collect($value)->toArray();
            } else {
                $result[$key] = $value;
            }
        }
        return $result;
    }
}
