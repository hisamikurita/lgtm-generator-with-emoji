"use client";

import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { IS_COPY } from "../jotai/atom";

type ButtonCopyProps = {
    image_url: string;
};

export const ButtonCopy = ({image_url} : ButtonCopyProps) => {
    const [isCopy, setIsCopy] = useAtom(IS_COPY);
    const [copy, setCopy] = useState(false);

    const handleClick = async () => {
        if(isCopy) return;

        navigator.clipboard.writeText(`![LGTM](${image_url})`);

        setCopy(true);
        setIsCopy(true);

        setTimeout(() => {
            setIsCopy(false);
        }, 1000);
    }

    return (
        <button onClick={handleClick} className={`flex justify-center items-center w-full h-full border-[2px] rounded-lg ${copy ? 'border-sky-400' : 'border-white'}`}>
            <svg viewBox="0 0 512 512" className="w-[18px] h-[18px]">
                <path d="M198.765,0L53.398,145.383V512h405.204V0H198.765z M196.634,49.667v93.576h-93.576L196.634,49.667z
                    M424.995,478.393H87.005V172.897h139.29V33.614h198.7V478.393z" className={copy ? 'fill-sky-400' : 'fill-white'}></path>
                <rect x="157.393" y="237.971" width="197.206" height="25.896" className={copy ? 'fill-sky-400' : 'fill-white'}></rect>
                <rect x="157.393" y="308.686" width="197.206" height="25.896" className={copy ? 'fill-sky-400' : 'fill-white'}></rect>
                <rect x="157.393" y="379.401" width="197.206" height="25.896" className={copy ? 'fill-sky-400' : 'fill-white'}></rect>
            </svg>
        </button>
    );
}