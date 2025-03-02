"use client";

import { URL_NOTICE, URL_PRIVACY } from "../utils/constants";

export const BaseFooter = () => {
    return (
        <footer className='fixed bottom-0 left-0 w-full bg-stone-900 text-white py-[12px] text-[12px] md:text-[14px]'>
            <div className="flex items-center justify-between md:max-w-[1148px] m-auto px-[20px]">
                <p className="font-poppins tracking-wide">© 2024 <a href="https://hsmkrt-tech.com/about/" target="_blank" rel="noopener noreferrer" aria-label="Githubを新規タブで開きます" className="border-b-[1px]">Hisami Kurita</a></p>
                <div>
                    <ul className="flex items-center gap-[12px] md:gap-[18px]">
                        <li className="hidden md:block"><a href={URL_PRIVACY} className="border-b-[1px]">Privacy Policy</a></li>
                        <li className="hidden md:block"><a href={URL_NOTICE} className="border-b-[1px]">Precautions For Use</a></li>
                        <li><a href="https://forms.gle/9sQ7AVV3J3XurMDp6" target="_blank" rel="noopener noreferrer" className="border-b-[1px]">Contact</a></li>
                        <li>
                            <a href="https://github.com/hisamikurita/lgtm-generator-with-emoji" target="_blank" rel="noopener noreferrer" className="flex h-[20px] md:h-[26px] w-[20px] md:w-[26px]">
                                <svg aria-label="Githubを新規タブで開きます" viewBox="0 0 16 16" width="16" height="16" className="h-full w-full">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" className="fill-white"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
};