/** @format */

import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { ComponentProps } from 'react';
import styles from './HeroImgContainer.module.scss';
import Image from './ui/Image';

interface IProps extends TDefaultProps {
    imgSrc: ComponentProps<typeof Image>['src'];
    imgClassName?: string;
}

const HeroImgContainer = ({ imgSrc, imgClassName }: IProps) => {
    return (
        <div className={styles.img_container}>
            <div className={styles.img_container__frame} />
            <Image
                className={clsx(styles.img_container__img, imgClassName)}
                src={imgSrc}
                alt='Profile pic of Darnell Noel'
            />
        </div>
    );
};

export default HeroImgContainer;
