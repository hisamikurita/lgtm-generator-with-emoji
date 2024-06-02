"use client";

import { useState, useRef, ChangeEventHandler } from 'react';
import { useAtom } from 'jotai';
import { PREVIEW_DATA, IS_CURSOR_UPLOAD } from '../jotai/atom';
import { THUMBNAIL_SIZE } from '../utils/constants';

export const ButtonUpload = () => {
    const input = useRef<HTMLInputElement>(null);
    const [images, setImages] = useAtom(PREVIEW_DATA);
    const [upload, setIsUpload] = useAtom(IS_CURSOR_UPLOAD);

    const handleClick = () => {
        if(input.current) input.current.click();
    }

    const handleFiles: ChangeEventHandler<HTMLInputElement> = (e) => {
        if(!e.target.files || e.target.files.length === 0) return

        console.log(e.target.files.length);

        // バイナリデータを取得
        const file = e.target.files[0] as Blob;

        // BASE64にエンコード
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            if(!e.target) return
            
            console.log(e.target.result);
            setImages(e.target.result as string);
        }
    };

    const handleMouseEnter = () => {
        setIsUpload(true);
    }

    const handleMouseLeave = () => {
        setIsUpload(false);
    }

    return (
        <div className='flex items-center justify-center tracking-wider'>
            <input type="file" id='upload' accept="image/*" ref={input} onChange={handleFiles} className='hidden'></input>
            <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} id='upload' className='flex items-center justify-center gap-[10px] w-full md:w-[260px] h-[54px] bg-blue-500 font-poppins text-white text-[20px] shadow-2xl rounded-full'>
                UPLOAD
                <svg viewBox="0 0 512 512" className="w-[19px] h-[19px] rotate-[180deg]">
                    <path d="M243.591,309.362c3.272,4.317,7.678,6.692,12.409,6.692c4.73,0,9.136-2.376,12.409-6.689l89.594-118.094
                        c3.348-4.414,4.274-8.692,2.611-12.042c-1.666-3.35-5.631-5.198-11.168-5.198H315.14c-9.288,0-16.844-7.554-16.844-16.84V59.777
                        c0-11.04-8.983-20.027-20.024-20.027h-44.546c-11.04,0-20.022,8.987-20.022,20.027v97.415c0,9.286-7.556,16.84-16.844,16.84
                        h-34.305c-5.538,0-9.503,1.848-11.168,5.198c-1.665,3.35-0.738,7.628,2.609,12.046L243.591,309.362z" className="fill-current"></path>
                    <path d="M445.218,294.16v111.304H66.782V294.16H0v152.648c0,14.03,11.413,25.443,25.441,25.443h461.118
                        c14.028,0,25.441-11.413,25.441-25.443V294.16H445.218z" className="fill-current"></path>
                </svg>
            </button>
        </div>
    )
};