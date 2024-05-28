"use client";

import { useState, useEffect } from "react";
import { CardThumbnail } from "./CardThumbnail";
import { THUMBNAIL_SIZE } from '../utils/constants';
import { useUuid } from "../hooks/useUuid";
import { setCookie, parseCookies } from 'nookies';
import InfiniteScroll  from "react-infinite-scroller"

export const PageIndex = () => {
    // ユーザーIDをセット
    useUuid()

    const [list, setList] = useState([]);
    const [hasMore, setHasMore] = useState(true);
    const cookies = parseCookies();

    //項目を読み込むときのコールバック
    const loadMore = async (page) => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_IMAGES}?page=${page}&userId=${cookies.uuid}`);  //API通信
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