"use client";

import { useUuid } from "../hooks/useUuid";
import { useState, useEffect } from "react";
import { setCookie, parseCookies } from 'nookies';
import { CardThumbnail } from "../components/CardThumbnail";
import { THUMBNAIL_SIZE } from '../utils/constants';
import InfiniteScroll  from "react-infinite-scroller"

export const PageFavorite = () => {
    // ユーザーIDをセット
    useUuid()

    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const cookies = parseCookies();

    // お気に入り一覧取得
    //項目を読み込むときのコールバック
    const loadMore = async (page) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_FAVORITE}?page=${page}&userId=${cookies.uuid}`);  //API通信
        const data = await res.json();  //取得データ

        //データ件数が0件の場合、処理終了
        if (data.length < 1) {
            setHasMore(false);
            return;
        }
        //取得データをリストに追加
        setList([...list, ...data])
    }

    const items = (
        <ul className='grid grid-cols-3 gap-[24px] mt-[60px]'>
            {list.map((image, index) => (
                <li key={index} className={`w-[${THUMBNAIL_SIZE.width}px] h-[${THUMBNAIL_SIZE.height}px]`}>
                    <CardThumbnail image={image} />
                </li>
            ))}
        </ul>
    )

    return (
        <div>
        <InfiniteScroll
         loadMore={loadMore}    
         hasMore={hasMore}
         >
             {items}         
       </InfiniteScroll>
     </div>
    );
}