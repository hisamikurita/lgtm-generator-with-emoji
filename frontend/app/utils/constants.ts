export const THUMBNAIL_SIZE = {
    width: 360,
    height: 202
} as const;

export const TITLE = 'LGTM GENERATOR WITH EMOJI';
export const DESCRIPTION = 'LGTM GENERATOR WITH EMOJIはシンプルな操作で素早くLGTM（Looks Good To Me）画像を生成できる便利なツールです。手間なく高品質な画像を作成し、コミュニケーションをもっと楽しくスムーズに。';

export const EMOJIS = ['😍', '😉', '😀', '😇', '🤪', '😎', '💀', '💩', '💕', '👾', '🤖', '😺', '👺', '😈', '🙄', '😮‍💨', '😴', '😮', '🥺', '🙈', '👻', '👋', '👌', '🫰', '👏', '🫶', '💪', '👶', '👧', '👦', '🧔‍♂️', '🧑‍🦲', '🧑🏿‍🦰', '🙆🏾', '💁', '💁‍♀️', '🧏', '🙇🏼‍♂️', '🤷🏻‍♀', '🤷🏾', '👨🏾‍🎓', '👨🏾‍🍳', '🧑🏾‍💻', '🥷', '👰‍♂', '🤱🏻', '👼', '🎅🏻', '🦸‍♂️', '🦹🏾‍♀️', '🧚', '🧛‍♂', '🌈', "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯","🦁", "🐮", "🐷", "🐸", "🐵", "🐥", "🐧", "🐦", "🐤", "🐣","🦉", "🦄", "🐝", "🦋", "🐌", "🐢", "🐠", "🐟", "🐬", "🐳", "🦔", "🥳", "👩‍❤️‍👩", "👨‍❤️‍👨", "👩‍❤️‍👨", "👩‍❤️‍💋‍👩", "👨‍❤️‍💋‍👨", "👩‍❤️‍💋‍👨","🤼", "🚴‍♂️", "🚴‍♀️", "🚵‍♂️", "🚵‍♀️", "🧗‍♂️","🏄‍♂️", "🏄‍♀️", "🏊‍♂️", "🏊‍♀️", "🤽‍♂️", "🤽‍♀️", "🚣‍♂️", "🚣‍♀️", "🧘‍♂️", "🧘‍♀️", "🏋️‍♂️", "🏋️‍♀️", "🤸‍♂️", "🤸‍♀️", "🤾‍♂️", "🤾‍♀️","🤹‍♂️", "🤹‍♀️", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👨‍👦","👩‍👧‍👦","👨‍👧‍👧"] as const;

export const URL_INDEX = '/';
export const URL_CREATE = '/create';
export const URL_FAVORITE = '/favorite';
export const URL_NOTICE = '/notice';
export const URL_PRIVACY = '/privacy';

export const FIX_EMOJI = [
    {
        'emoji': '🐶',
        'blur': 'blur-[2px]',
        'rotate': 'rotate-[18deg]',
        'duration': 'animation-duration-14',
        'delay': 'animation-delay-6',
        'size': 'text-[42px] md:text-[102px]',
        'position': 'right-[2%]',
    },
    {
        'emoji': '🤟',
        'blur': 'blur-[1px]',
        'rotate': 'rotate-[-28deg]',
        'duration': 'animation-duration-20',
        'delay': 'animation-delay-1',
        'size': 'text-[34px] md:text-[72px]',
        'position': 'right-[12%]',
    },
    {
        'emoji': '💕',
        'blur': 'blur-[3px]',
        'rotate': 'rotate-[-8deg]',
        'duration': 'animation-duration-15',
        'delay': 'animation-delay-8',
        'size': 'text-[38px] md:text-[79px]',
        'position': 'right-[28%]',
    },
    {
        'emoji': '💩',
        'blur': 'blur-[4px]',
        'rotate': 'rotate-[-48deg]',
        'duration': 'animation-duration-17',
        'delay': 'animation-delay-4',
        'size': 'text-[42px] md:text-[85px]',
        'position': 'right-[15%]',
    },
    {
        'emoji': '💀',
        'blur': 'blur-[0px]',
        'rotate': 'rotate-[-68deg]',
        'duration': 'animation-duration-15',
        'delay': 'animation-delay-9',
        'size': 'text-[26px] md:text-[45px]',
        'position': 'right-[9%]',
    },
    {
        'emoji': '🤪',
        'blur': 'blur-[0px]',
        'rotate': 'rotate-[-88deg]',
        'duration': 'animation-duration-13',
        'delay': 'animation-delay-19',
        'size': 'text-[52px] md:text-[120px]',
        'position': 'right-[39%]',
    },
    {
        'emoji': '🌻',
        'blur': 'blur-[6px]',
        'rotate': 'rotate-[-44deg]',
        'duration': 'animation-duration-16',
        'delay': 'animation-delay-4',
        'size': 'text-[46px] md:text-[80px]',
        'position': 'right-[50%]',
    },
    {
        'emoji': '🦀',
        'blur': 'blur-[3px]',
        'rotate': 'rotate-[34deg]',
        'duration': 'animation-duration-19',
        'delay': 'animation-delay-14',
        'size': 'text-[28px] md:text-[50px]',
        'position': 'right-[44%]',
    },
    {
        'emoji': '🚀',
        'blur': 'blur-[7px]',
        'rotate': 'rotate-[64deg]',
        'duration': 'animation-duration-20',
        'delay': 'animation-delay-18',
        'size': 'text-[22px] md:text-[30px]',
        'position': 'right-[36%]',
    },
    {
        'emoji': '🎃',
        'blur': 'blur-[4px]',
        'rotate': 'rotate-[140deg]',
        'duration': 'animation-duration-14',
        'delay': 'animation-delay-18',
        'size': 'text-[29px] md:text-[66px]',
        'position': 'left-[44%]',
    },
    {
        'emoji': '🎸',
        'blur': 'blur-[1px]',
        'rotate': 'rotate-[110deg]',
        'duration': 'animation-duration-17',
        'delay': 'animation-delay-13',
        'size': 'text-[32px] md:text-[75px]',
        'position': 'left-[37%]',
    },
    {
        'emoji': '📦',
        'blur': 'blur-[0px]',
        'rotate': 'rotate-[20deg]',
        'duration': 'animation-duration-15',
        'delay': 'animation-delay-6',
        'size': 'text-[42px] md:text-[110px]',
        'position': 'left-[1%]',
    },
    {
        'emoji': '🚫',
        'blur': 'blur-[4px]',
        'rotate': 'rotate-[160deg]',
        'duration': 'animation-duration-14',
        'delay': 'animation-delay-6',
        'size': 'text-[20px] md:text-[30px]',
        'position': 'left-[10%]',
    },
    {
        'emoji': '😍',
        'blur': 'blur-[1px]',
        'rotate': 'rotate-[6deg]',
        'duration': 'animation-duration-15',
        'delay': 'animation-delay-1',
        'size': 'text-[36px] md:text-[80px]',
        'position': 'left-[16%]',
    },
    {
        'emoji': '🙈',
        'blur': 'blur-[3px]',
        'rotate': 'rotate-[56deg]',
        'duration': 'animation-duration-17',
        'delay': 'animation-delay-5',
        'size': 'text-[37px] md:text-[70px]',
        'position': 'left-[22%]',
    },
    {
        'emoji': '🙌',
        'blur': 'blur-[4px]',
        'rotate': 'rotate-[176deg]',
        'duration': 'animation-duration-18',
        'delay': 'animation-delay-5',
        'size': 'text-[30px] md:text-[60px]',
        'position': 'left-[30%]',
    },
]