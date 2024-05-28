import { THUMBNAIL_SIZE } from '../utils/constants';
import { ButtonFavorite } from './ButtonFavorite';
import { ButtonDownload } from './ButtonDownload';
import { ButtonCopy } from './ButtonCopy';

type CardThumbnailProps = {
    image: {
        id: Number;
        image_url: string;
        is_favorite: boolean;
    };
};

export const CardThumbnail = ({image} : CardThumbnailProps) => {
    return (
        <div className='relative'>
            <img src={image.image_url} width={THUMBNAIL_SIZE.width} height={THUMBNAIL_SIZE.height} alt="" crossOrigin='anonymous' className='border-[4px] border-stone-900'/>
            <div className='flex gap-[10px] absolute bottom-[10px] right-[10px] '>
                <span className='w-[34px] h-[34px]'>
                    <ButtonCopy image_url={image.image_url} />
                </span>
                <span className='w-[34px] h-[34px]'>
                    <ButtonDownload image_url={image.image_url} />
                </span>
                <span className='w-[34px] h-[34px]'>
                    <ButtonFavorite image_id={image.id} is_favorite={image.is_favorite} />
                </span>
            </div>
        </div>
    );
}