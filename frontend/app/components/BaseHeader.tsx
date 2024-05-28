"use client";

import { useState, useEffect } from "react";
import { outputEmojis } from "../utils/output-emojis";
import { EMOJIS, URL_INDEX, URL_CREATE, URL_FAVORITE } from "../utils/constants";
import Link from 'next/link'
import { useAtom } from "jotai";
import { IS_NEW_PAGE, IS_CREATE_PAGE, IS_FAVORITE_PAGE } from "../jotai/atom";
import { usePathname } from "next/navigation";

export const BaseHeader = () => {
    const [isFavoritePage, setIsFavoritePage] = useAtom(IS_FAVORITE_PAGE);
    const [isCreatePage, setIsCreatePage] = useAtom(IS_CREATE_PAGE);
    const [isNewPage, setIsNewPage] = useAtom(IS_NEW_PAGE);
    const [emojiIndex, setEmojiIndex] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        // ランダムな絵文字を返す
        let saveIndex = 0;
        let randIndex = 0;

        setInterval(() => {
        // 前回でた絵文字と同じ場合は再度ランダムを取得
        do {
            randIndex = Math.floor(Math.random() * EMOJIS.length);
        } while (randIndex === saveIndex);

        saveIndex = randIndex;
        setEmojiIndex(randIndex);
        }, 200)


    }, []); 

    const handleMouseEnter = (e) => {
        if(e.target.dataset.id === 'new') setIsNewPage(true);
        else if(e.target.dataset.id === 'create') setIsCreatePage(true);
        else if(e.target.dataset.id === 'favorite') setIsFavoritePage(true);
    }

    const handleMouseLeave = (e) => {
        if(e.target.dataset.id === 'new') setIsNewPage(false);
        else if(e.target.dataset.id === 'create') setIsCreatePage(false);
        else if(e.target.dataset.id === 'favorite') setIsFavoritePage(false);
    }

    return (
        <div className="relative">
            <h1 className='text-[60px] text-center font-poppins tracking-wider'>LGTM GENERATOR WITH <span className="bg-white px-[14px] rounded-lg"><span className="relative bottom-[-1px] right-[-2px]">{EMOJIS[emojiIndex]}</span></span></h1>
            <p className="mt-[24px] text-[20px] text-center leading-10">この LGTM GENERATOR WITH EMOJI はシンプルな操作で<br />素早くLGTM（Looks Good To Me）画像を生成できる便利なツールです。<br />手間なく高品質な画像を作成し、コミュニケーションをもっと楽しくスムーズに。</p>
            <nav className="w-full mt-[64px]">
                <ul className="grid grid-cols-3 gap-[24px] text-[20px] font-poppins text-white tracking-wider">
                    <li><Link href={URL_INDEX} data-id="new" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex justify-center py-[12px] bg-stone-900 shadow-2xl rounded-full ${pathname === '/' ? 'bg-amber-400 shadow-inner' : ''}`}>NEW !</Link></li>
                    <li><Link href={URL_CREATE} data-id="create" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex justify-center py-[12px] bg-stone-900 shadow-2xl rounded-full ${pathname === '/create' ? 'bg-amber-400 shadow-inner' : ''}`}>CREATE !</Link></li>
                    <li><Link href={URL_FAVORITE} data-id="favorite" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex justify-center py-[12px] bg-stone-900 shadow-2xl rounded-full ${pathname === '/favorite' ? 'bg-amber-400 shadow-inner' : ''}`}>FAVORITE !</Link></li>
                </ul>
            </nav>
        </div>
    )
};