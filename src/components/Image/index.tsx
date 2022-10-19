import { useImage } from 'react-image';

import { ImageProps } from './types';

export function Image({ src, fallbackSrc, ...rest }: ImageProps) {
  const { src: imageSource } = useImage({
    srcList: [src ?? fallbackSrc, fallbackSrc ?? ''],
  });

  // eslint-disable-next-line jsx-a11y/alt-text
  return <img src={imageSource || src} {...rest} />;
}
