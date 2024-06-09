"use client";

import { useState, useRef, ChangeEventHandler } from 'react';
import { useAtom } from 'jotai';
import { PREVIEW_DATA, IS_CURSOR_GENERATE, IS_LOADING, IS_COMPLETE, IS_SAVE_COMPLETE_IMAGE } from '../jotai/atom';
import { THUMBNAIL_SIZE } from '../utils/constants';
import { IS_UPLOAD, GENERATE_DATA } from '../jotai/atom';
import { scrollTop } from '../utils/animation';

export const ButtonGenerate = () => {
    const [complete, setComplete] = useAtom(IS_COMPLETE);
    const [loading, setLoading] = useAtom(IS_LOADING);
    const [upload] = useAtom(IS_UPLOAD);
    const [generate] = useAtom(GENERATE_DATA);
    const [isCursorGenerate, setIsCursorGenerate] = useAtom(IS_CURSOR_GENERATE);
    const [saveCompleteImage, setSaveCompleteImage] = useAtom(IS_SAVE_COMPLETE_IMAGE)

    const handleClick = async () => {
        // BASE64の値を見て同じ画像をPOST送信しようとしている時は処理を返す
        if(saveCompleteImage === generate || loading) return;

        // POST送信
        setLoading(true);
        // const res = await fetch(process.env.NEXT_PUBLIC_API_UPLOAD || '', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({
        //         image: generate,
        //     }),
        // });
        // const data = await res.json();
        setSaveCompleteImage(generate);
        setLoading(false);
        setComplete(true);
        scrollTop()
        setTimeout(() => {
            setComplete(false);
        },2000)
    }

    const handleMouseEnter = () => {
        setIsCursorGenerate(true);
    }

    const handleMouseLeave = () => {
        if(loading) return;

        setIsCursorGenerate(false);
    }

    return (
        <div className='flex items-center justify-center tracking-wider'>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className={`flex items-center justify-center gap-[10px] w-full md:w-[260px] h-[54px] font-poppins text-[20px] shadow-2xl rounded-full ${upload ? 'bg-orange-500 text-white pointer-events-auto' : 'bg-gray-500 text-gray-300 pointer-events-none'}`}>
                GENERATE !
            </button>
        </div>
    )
};