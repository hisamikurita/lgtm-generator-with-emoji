"use client";

import { useEffect, useRef } from "react";
import { useAtom } from "jotai";
import { IS_COPY, IS_DOWNLOAD, IS_FAVORITE, IS_NEW_PAGE, IS_CREATE_PAGE, IS_FAVORITE_PAGE, IS_CURSOR_UPLOAD, IS_CURSOR_CHANGE, IS_CURSOR_GENERATE, IS_LOADING, IS_COMPLETE } from "../jotai/atom";
import { slideIn, slideOut } from "../utils/animation";
import { useDevice } from "../hooks/useDevice";

export const Cursor = () => {
    const [isCopy] = useAtom(IS_COPY);
    const [isDownload] = useAtom(IS_DOWNLOAD);
    const [isFavorite] = useAtom(IS_FAVORITE);
    const [isNewPage] = useAtom(IS_NEW_PAGE);
    const [isCreatePage] = useAtom(IS_CREATE_PAGE);
    const [isFavoritePage] = useAtom(IS_FAVORITE_PAGE);
    const [isCursorUpload] = useAtom(IS_CURSOR_UPLOAD);
    const [isCursorChange] = useAtom(IS_CURSOR_CHANGE);
    const [isCursorGenerate, setIsCursorGenerate] = useAtom(IS_CURSOR_GENERATE);
    const [isLoading] = useAtom(IS_LOADING);
    const [isComplete] = useAtom(IS_COMPLETE);

    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorCopyRef = useRef<HTMLDivElement>(null);
    const cursorDownloadRef = useRef<HTMLDivElement>(null);
    const cursorFavoriteRef = useRef<HTMLDivElement>(null);
    const cursorNewPageRef = useRef<HTMLDivElement>(null);
    const cursorCreatePageRef = useRef<HTMLDivElement>(null);
    const cursorFavoritePageRef = useRef<HTMLDivElement>(null);
    const cursorUploadRef = useRef<HTMLDivElement>(null);
    const cursorChangeRef = useRef<HTMLDivElement>(null);
    const cursorGenerateRef = useRef<HTMLDivElement>(null);
    const cursorCompleteRef = useRef<HTMLDivElement>(null);

    const { isTouch } = useDevice();

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            if(!cursorRef.current) return;

            cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
        });
    },[])

    useEffect(() => {
        if(isLoading || isComplete || isTouch) return;

        if(isCopy) slideIn(cursorCopyRef.current);
        else slideOut(cursorCopyRef.current);

        if(isDownload) slideIn(cursorDownloadRef.current);
        else slideOut(cursorDownloadRef.current);

        if(isFavorite) slideIn(cursorFavoriteRef.current);
        else slideOut(cursorFavoriteRef.current);

        if(isNewPage) slideIn(cursorNewPageRef.current);
        else slideOut(cursorNewPageRef.current);

        if(isCreatePage) slideIn(cursorCreatePageRef.current);
        else slideOut(cursorCreatePageRef.current);

        if(isFavoritePage) slideIn(cursorFavoritePageRef.current);
        else slideOut(cursorFavoritePageRef.current);

        if(isCursorUpload) slideIn(cursorUploadRef.current);
        else slideOut(cursorUploadRef.current);

        if(isCursorChange) slideIn(cursorChangeRef.current);
        else slideOut(cursorChangeRef.current);

        if(isCursorGenerate) slideIn(cursorGenerateRef.current);
        else slideOut(cursorGenerateRef.current);
    }, [isCopy, isDownload, isFavorite, isNewPage, isCreatePage, isFavoritePage, isCursorUpload, isCursorChange, isCursorGenerate, isLoading])

    useEffect(() => {
        
        setIsCursorGenerate(false);
        slideOut(cursorGenerateRef.current);

        if(isComplete) slideIn(cursorCompleteRef.current);
        else slideOut(cursorCompleteRef.current);
    }, [isComplete])

    return (
        <div ref={cursorRef} className="fixed top-0 left-0 cursor text-center leading-5 z-10 pointer-events-none">
            <div ref={cursorCopyRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0  bg-white py-[12px] px-[14px] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                LGTMテキストを<br/>コピーしたよ！
            </div>
            <div ref={cursorFavoriteRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                この画像を<br/>お気に入りしたよ！
            </div>
            <div ref={cursorDownloadRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                この画像を<br/>ダウンロードできるよ！
            </div>
            <div ref={cursorNewPageRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                みんなが作成した画像を<br/>見ることができるページだよ！
            </div>
            <div ref={cursorCreatePageRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                LGTM画像を<br/>作成することができるページだよ！
            </div>
            <div ref={cursorFavoritePageRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                お気に入りした画像を<br/>見ることができるページだよ！
            </div>
            <div ref={cursorUploadRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                好きな画像を<br/>選択しよう！
            </div>
            <div ref={cursorChangeRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                好きな絵文字に<br/>変更しよう！
            </div>
            <div ref={cursorGenerateRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                {isLoading ? 'LGTM画像を生成中...' : 'LGTM画像を生成しよう！'}
            </div>
            <div ref={cursorCompleteRef} className="absolute left-[-50%] whitespace-nowrap flex justify-center shirink-0 bg-white py-[12px] px-[14px] left-[-50%] translate-y-[-120%] translate-x-[-50%] rounded-md after:border-x-[8px] after:border-t-[10px] after:border-transparent after:border-t-white after:absolute after:bottom-[-8px] scale-0 origin-bottom">
                LGTM画像を生成したよ！<br/>作成された画像を見にいこう！
            </div>
        </div>
    );
};