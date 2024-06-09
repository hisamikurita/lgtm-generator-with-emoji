"use client";

import { useState, useEffect } from "react";
import { outputEmojis } from "../utils/output-emojis";
import { EMOJIS, URL_INDEX, URL_CREATE, URL_FAVORITE, URL_PRIVACY, URL_NOTICE } from "../utils/constants";
import Link from 'next/link'
import { useAtom } from "jotai";
import { IS_NEW_PAGE, IS_CREATE_PAGE, IS_FAVORITE_PAGE, IS_COMPLETE } from "../jotai/atom";
import { usePathname } from "next/navigation";

export const BaseHeader = () => {
    const [isFavoritePage, setIsFavoritePage] = useAtom(IS_FAVORITE_PAGE);
    const [isCreatePage, setIsCreatePage] = useAtom(IS_CREATE_PAGE);
    const [isNewPage, setIsNewPage] = useAtom(IS_NEW_PAGE);
    const [emojiIndex, setEmojiIndex] = useState(0);
    const pathname = usePathname();
    const [complete, setComplete] = useAtom(IS_COMPLETE);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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

    const handleMouseEnter = (e: any) => {
        if(e.target.dataset.id === 'new') setIsNewPage(true);
        else if(e.target.dataset.id === 'create') setIsCreatePage(true);
        else if(e.target.dataset.id === 'favorite') setIsFavoritePage(true);
    }

    const handleMouseLeave = (e: any) => {
        if(e.target.dataset.id === 'new') setIsNewPage(false);
        else if(e.target.dataset.id === 'create') setIsCreatePage(false);
        else if(e.target.dataset.id === 'favorite') setIsFavoritePage(false);
    }

    const handleMenuClick = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname])

    return (
        <header className="relative">
            <div className="md:hidden fixed flex items-center justify-between w-full top-0 left-0 bg-stone-900 px-[20px] py-[10px] z-10">
                <Link href={URL_INDEX} className="bg-white px-[14px] font-poppins text-[28px] rounded-lg">L</Link>
                <button onClick={handleMenuClick} className="relative text-white text-[18px]">MENU {isMenuOpen ? 'CLOSE': 'OPEN'}<span className="absolute top-[-14px] left-[-20px] rotate-[-30deg]">🍔</span></button>
            </div>
            <div>
                <nav className={`md:hidden fixed top-[60px] left-0 w-full bg-stone-900 px-[20px] py-[16px] z-10 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="text-[20px] font-poppins tracking-wider">
                        <li><Link href={URL_INDEX} className={`block rounded-full py-[12px] text-center ${pathname === '/' ? 'bg-amber-400 text-white' : 'bg-white'}`}>NEW !</Link></li>
                        <li><Link href={URL_CREATE} className={`block mt-[14px] rounded-full py-[12px] text-center ${pathname === '/create/' ? 'bg-amber-400 text-white' : 'bg-white'}`}>CREATE !</Link></li>
                        <li><Link href={URL_FAVORITE} className={`block mt-[14px] rounded-full py-[12px] text-center ${pathname === '/favorite/' ? 'bg-amber-400 text-white' : 'bg-white'}`}>FAVORITE !</Link></li>
                        <li><Link href={URL_PRIVACY} className="block mt-[24px] py-[12px] text-[16px] text-white text-center">Privacy Policy</Link></li>
                        <li><Link href={URL_NOTICE} className="block py-[12px] text-[16px] text-white text-center">Precautions For Use</Link></li>
                    </ul>
                </nav>
            </div>
            <h1 className='text-[35px] md:text-[60px] text-center font-poppins tracking-wider'>LGTM GENERATOR <br className="md:hidden"/>WITH <span className="bg-white px-[6px] md:px-[14px] rounded-lg"><span className="relative bottom-[-1px] right-[-1px]" aria-label="EMOJI">{EMOJIS[emojiIndex]}</span></span></h1>
            <p className="mt-[24px] text-[16px] md:text-[20px] text-center leading-8 md:leading-10">この LGTM GENERATOR WITH EMOJI は<br className="md:hidden"/>シンプルな操作で<br />素早くLGTM（Looks Good To Me）画像を<br className="md:hidden"/>生成できる便利なツールです。<br />手間なく高品質な画像を作成し、<br className="md:hidden"/>コミュニケーションをもっと楽しくスムーズに。</p>
            <nav className="w-full mt-[64px]">
                <ul className="grid grid-cols-1 md:grid-cols-3 gap-[14px] md:gap-[24px] text-[20px] font-poppins text-white tracking-wider">
                    <li className="relative">
                        <Link href={URL_INDEX} data-id="new" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex justify-center py-[12px] rounded-full ${pathname === '/' ? 'bg-amber-400 shadow-inner' : 'bg-stone-900 shadow-2xl'}`}>
                        NEW !
                        <div className={`flex justify-center absolute top-[-56px] ${complete ? 'scale-1' : 'scale-0'} transition-transform`}>
                            <span className="text-[34px] animation-name-hand animation-duration-1 animation-timing-linear animation-itteration-count-infinite">👇</span>
                        </div>
                        </Link>
                    </li>
                    <li><Link href={URL_CREATE} data-id="create" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex justify-center py-[12px] rounded-full ${pathname === '/create/' ? 'bg-amber-400 shadow-inner' : 'bg-stone-900 shadow-2xl'}`}>CREATE !</Link></li>
                    <li><Link href={URL_FAVORITE} data-id="favorite" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className={`flex justify-center py-[12px] rounded-full ${pathname === '/favorite/' ? 'bg-amber-400 shadow-inner' : 'bg-stone-900 shadow-2xl'}`}>FAVORITE !</Link></li>
                </ul>
            </nav>
        </header>
    )
};