import { THUMBNAIL_SIZE } from './constants';

type Image = {
    width: number;
    height: number;
};

export const getCoverImageSize = (image : Image) => {
    const imageRatio = image.height / image.width;
    const thumbnailRatio = THUMBNAIL_SIZE.height / THUMBNAIL_SIZE.width;
    let width = 0;
    let height = 0;
    let offsetX = 0;
    let offsetY = 0;
    
    if (imageRatio > thumbnailRatio) {
      width = THUMBNAIL_SIZE.width;
      height = THUMBNAIL_SIZE.width * imageRatio;
      offsetX = 0;
      offsetY = (THUMBNAIL_SIZE.height - height) / 2;
    } else {
      width = THUMBNAIL_SIZE.height / imageRatio;
      height = THUMBNAIL_SIZE.height;
      offsetX = (THUMBNAIL_SIZE.width - width) / 2;
      offsetY = 0;
    }
    
    return { width, height, offsetX, offsetY };
  };