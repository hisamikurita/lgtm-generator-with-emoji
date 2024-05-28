"use client";

import { ButtonUpload } from '../components/ButtonUpload';
import { ButtonChangeEmoji } from '../components/ButtonChangeEmoji';
import { ButtonGenerate } from '../components/ButtonGenerate';
import { useUuid } from "../hooks/useUuid";
import { THUMBNAIL_SIZE } from '../utils/constants';
import { CardPreview } from '../components/CardPreview';
import { useAtom } from 'jotai';
import { PREVIEW_DATA, IS_LOADING } from '../jotai/atom';

export const PageCreate = () => {
    // ユーザーIDをセット
    useUuid()

    const [isLoading] = useAtom(IS_LOADING);
    const [images] = useAtom(PREVIEW_DATA);

    return (
        <div className={`${isLoading ? 'pointer-events-none' : 'pointer-events-auto'} relative mt-[60px]`}>
            <h1 className="text-[24px]">LGTM画像生成の流れ</h1>
            <ol className="mt-[12px] text-[16px]">
                <li><span>1. 画像をアップロード！</span>「UPLOAD」ボタンを押して、好きな画像を選択しよう。</li>
                <li><span>2. 画像を作成！</span> 良さげな画像ができたら「GENERATE !」ボタンを押そう。</li>
                <li><span>3. 画像を確認！</span> 画像を作成したら「NEW!」ボタンを押して、作成された画像を見にいこう。</li>
                <li><span>4. 画像の利用！</span> 作成した画像でLGTMテキストをコピーしよう。ダウンロードもできるよ。</li>
            </ol>
            <div className='flex items-center justify-center gap-[32px] mt-[60px]'>
                <div className="relative flex items-center justify-center w-[368px] h-[210px] bg-gray-300 font-poppins text-[20px] border-[4px] border-stone-900">
                    PREVIEW 👀
                    {images && <div className='absolute top-0 left-0 w-full h-full'><CardPreview image={images}/></div> }
                </div>
                <div className='grid gap-[24px]'>
                    <div className='flex gap-[12px]'>
                        <ButtonUpload />
                        <ButtonChangeEmoji />
                    </div>
                    <ButtonGenerate />
                </div>
            </div>
        </div>
    );
}