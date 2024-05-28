import { EMOJIS } from "./constants"

export const outputEmojis = () => {
    let result = '';

    for (const emoji of EMOJIS) {
        result += emoji;
    }

    return result;
}