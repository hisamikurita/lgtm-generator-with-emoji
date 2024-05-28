import { gsap } from "gsap";
import { CustomEase } from "gsap/all";

gsap.registerPlugin(CustomEase);

const EASING = {
    transform: CustomEase.create('transform', 'M0,0 C0.44,0.05 0.17,1 1,1'),
    colorAndOpacity: CustomEase.create('colorAndOpacity', 'M0,0 C0.26,0.16 0.1,1 1,1 '),
};

export const slideIn = (elm: HTMLElement) => {
    gsap.fromTo(elm,
        {
            scale: 0,
            rotate: -30,
        },
        {
            scale: 1,
            rotate: 0,
            duration: 0.3,
            ease: EASING.transform,
        });
}

export const slideOut = (elm: HTMLElement) => {
    gsap.to(elm, {
        scale: 0,
        rotate: -30,
        duration: 0.3,
        ease: EASING.transform,
    });
}