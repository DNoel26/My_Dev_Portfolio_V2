/** @format */

import clsx from 'clsx';
import Image from 'next/image';
import { ComponentProps } from 'react';
import styles from './WrapperIcon.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
interface IWrapperIconProps extends ComponentProps<typeof Image> {
    src: ComponentProps<typeof Image>['src'];
    alt: ComponentProps<typeof Image>['alt'];
}

const WrapperIcon = ({ ...props }: IWrapperIconProps) => {
    const { className, alt, src } = props;
    return (
        <div className={clsx(styles.wrapper, className)}>
            <Image className={styles.wrapper__icon} {...props} src={src} alt={alt} />
        </div>
    );
};

export default WrapperIcon;
