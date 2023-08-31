/** @format */

import { logoDarnell } from '@@assets/images';
import { APP_URL } from '@@lib/constants';
import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import Image from './Image';
import Link from './Link';
import styles from './Logo.module.scss';

const { HOME } = APP_URL.BASE;

const Logo = ({ className }: TDefaultProps) => {
    return (
        <Link className={clsx(styles.logo, className)} href={HOME}>
            <Image src={logoDarnell} alt='My signature logo' />
        </Link>
    );
};

export default Logo;
