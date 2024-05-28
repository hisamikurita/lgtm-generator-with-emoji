"use client";

import { useAtom } from "jotai";
import { IS_DOWNLOAD } from "../jotai/atom";

type ButtonDownloadProps = {
    image_url: string;
};

export const ButtonDownload = ({image_url} : ButtonDownloadProps) => {
    const [, setDownload] = useAtom(IS_DOWNLOAD);

    // 画像は別サーバーのストレージに保存されているため、ダウンロードする際にはfetchを使ってバイナリデータを取得させる
    const handleClick = async () => {
        const res = await fetch(image_url);
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = image_url;
        a.click();
    }

    const handleMouseEnter = () => {
        setDownload(true);
    }

    const handleMouseLeave = () => {
        setDownload(false);
    }

    return (
        <button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleClick} className="flex justify-center items-center w-full h-full text-white rounded-lg hover:text-green-400 border-[2px] border-white hover:border-green-400">
           <svg viewBox="0 0 512 512" className="w-[19px] h-[19px]">
                <path d="M243.591,309.362c3.272,4.317,7.678,6.692,12.409,6.692c4.73,0,9.136-2.376,12.409-6.689l89.594-118.094
                    c3.348-4.414,4.274-8.692,2.611-12.042c-1.666-3.35-5.631-5.198-11.168-5.198H315.14c-9.288,0-16.844-7.554-16.844-16.84V59.777
                    c0-11.04-8.983-20.027-20.024-20.027h-44.546c-11.04,0-20.022,8.987-20.022,20.027v97.415c0,9.286-7.556,16.84-16.844,16.84
                    h-34.305c-5.538,0-9.503,1.848-11.168,5.198c-1.665,3.35-0.738,7.628,2.609,12.046L243.591,309.362z" className="fill-current"></path>
                <path d="M445.218,294.16v111.304H66.782V294.16H0v152.648c0,14.03,11.413,25.443,25.441,25.443h461.118
                    c14.028,0,25.441-11.413,25.441-25.443V294.16H445.218z" className="fill-current"></path>
            </svg>
        </button>
    );
}