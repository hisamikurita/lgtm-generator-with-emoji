"use client";

import Script from "next/script";

const PUBLISHER_ID = process.env.NEXT_PUBLIC_PUBLISHER_ID || "";

export const GoogleAdSense = () => {
    return (
        <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-${PUBLISHER_ID}`}
        crossOrigin="anonymous"
        strategy="afterInteractive"
        />
    );
};