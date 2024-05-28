"use client";

import { useUuid } from "../hooks/useUuid";

export const PagePrivacy = () => {
    // ユーザーIDをセット
    useUuid()

    return (
        <div className="relative mt-[60px]">
        <h1 className="text-[32px]">プライバシーポリシー</h1>
        <ul className="grid gap-[24px] mt-[60px] text-[16px]">
            <li>
            <h2>アクセス解析ツールについて</h2>
            <ul className="mt-[8px]">
                <li>当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。このデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。この規約に関しての詳細は<a href="https://marketingplatform.google.com/about/analytics/terms/jp/" target="_blank" rel="noopener noreferrer" className="border-b-[1px] border-stone-900">Googleアナリティクスサービス利用規約</a>のページや<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="border-b-[1px] border-stone-900">Googleポリシーと規約ページ</a>をご覧ください。</li>
            </ul>
            </li>
            <li>
            <h2>プライバシーポリシー変更について</h2>
            <ul className="mt-[8px]">
                <li>当サイトは、個人情報に関して適用される日本の法令を遵守するとともに、本ポリシーの内容を適宜見直しその改善に努めます。修正された最新のプライバシーポリシーは常に本ページにて開示されます。</li>
            </ul>
            </li>
        </ul>
        </div>
    );
}