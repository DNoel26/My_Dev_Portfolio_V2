/** @format */

import clsx from 'clsx';
import Image, { ImageProps } from 'next/image';
import styles from './WrapperIcon.module.scss';

/* eslint-disable react/jsx-props-no-spreading */
type TWrapperIconProps = ImageProps;

const WrapperIcon = (props: TWrapperIconProps) => {
    const { className, alt, src, ...restProps } = props;
    return (
        <div className={clsx(styles.wrapper, className)}>
            <Image className={styles.wrapper__icon} src={src} alt={alt} {...restProps} />
        </div>
    );
};

export default WrapperIcon;
