/** @format */

import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { ComponentProps } from 'react';
import styles from './Card.module.scss';
import Image from './Image';

interface IProps extends TDefaultProps {
    src: ComponentProps<typeof Image>['src'];
    alt: ComponentProps<typeof Image>['alt'];
    heading: string;
    text: string;
    height?: number;
    width?: number;
}

const Card = ({
    src,
    alt,
    text,
    heading,
    className,
    height = 64,
    width = 64,
}: IProps) => {
    if (!heading) return null;
    return (
        <div className={clsx(styles.card, className)}>
            <Image src={src} alt={alt} height={height} width={width} />
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    );
};

export default Card;
