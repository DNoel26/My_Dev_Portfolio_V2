/** @format */

import type { ImageProps as NextImageProps } from 'next/image';
import NextImage from 'next/image';
import { useEffect, useState } from 'react';

/* eslint-disable react/jsx-props-no-spreading */
type TProps = NextImageProps & { fallbackSrc?: NextImageProps['src'] };

const Image = (props: TProps) => {
    const { src, fallbackSrc, ...restProps } = props;
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <NextImage
            src={imgSrc}
            onError={() => {
                return fallbackSrc && setImgSrc(fallbackSrc);
            }}
            {...restProps}
        />
    );
};

export default Image;
