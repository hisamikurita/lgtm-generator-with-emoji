import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { setCookie, parseCookies } from 'nookies';

export const useUuid = () => {
    useEffect(() => {
        const setData = async () => {
            // UUIDを生成してCookieに保存
            const cookies = parseCookies();
            
            if (!cookies.uuid) {
                const uuid = uuidv4();
                setCookie(null, 'uuid', uuid, null);

                // ユーザーIDを送信
                const res = await fetch(process.env.NEXT_PUBLIC_API_USER || '', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_id: uuid,
                    }),
                })
                const data = await res.json();
            }
            else {
                //
            }
        }
        setData();
    }, []);
}