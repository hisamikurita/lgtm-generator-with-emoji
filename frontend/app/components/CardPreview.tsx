"use client";

import { useRef, useEffect } from 'react';
import { getCoverImageSize } from '../utils/cover';
import { THUMBNAIL_SIZE } from '../utils/constants';
import { EMOJIS } from "../utils/constants";
import { useAtom } from 'jotai';
import { IS_UPLOAD, IS_CHANGE, GENERATE_DATA } from '../jotai/atom';

type CardPreviewProps = {
    image: string;
};

export const CardPreview = ({image} : CardPreviewProps) => {
    const [change] = useAtom(IS_CHANGE);
    const [generate, setGenerate] = useAtom(GENERATE_DATA);
    const [upload, setUpload] = useAtom(IS_UPLOAD);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const saveIndexRef = useRef<number>(0);

    const buffer = {
        x: 12,
        y: 24,
    }
    let randIndex = 0;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        
        const context = canvas.getContext('2d');
        if (!context) return;

        const img = new Image();
        img.src = image;

        // 前回でた絵文字と同じ場合は再度ランダムを取得
        do {
            randIndex = Math.floor(Math.random() * EMOJIS.length);
        } while (randIndex === saveIndexRef.current);

        saveIndexRef.current = randIndex;

        img.onload = async () => {

            // Retina対応
            canvas.width = THUMBNAIL_SIZE.width * 2;
            canvas.height = THUMBNAIL_SIZE.height * 2;

            // キャンバスを初期化
            context.clearRect(0, 0, canvas.width, canvas.height);

            // 画像を描画
            const { width, height, offsetX, offsetY } = getCoverImageSize(img);
            context.drawImage(img, offsetX * 2, offsetY * 2, width * 2, height * 2);
            // 黒い背景を描画
            context.fillStyle = 'rgba(0, 0, 0, 0.5)';
            context.fillRect(0, 0, canvas.width, canvas.height);

            // テキストを描画
            context.font = `bold ${32 * 2}px Arial`;
            context.fillStyle = 'white';
            context.textAlign = 'center';
            context.letterSpacing = "10px";
            context.fillText(`LGTM${EMOJIS[randIndex]}`, canvas.width / 2 + buffer.x, canvas.height / 2 + buffer.y);

            context.scale(0.5, 0.5);

            const base64 = canvas.toDataURL('image/jpeg');
            console.log(base64);

            setUpload(true)
            setGenerate(base64)
        };
    }, [image, change]);

    return (
        <canvas ref={canvasRef} style={{width: '100%', height: '100%'}} />
    )
};