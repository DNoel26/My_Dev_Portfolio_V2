/** @format */

import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';

import styles from './BackgroundGradient.module.scss';

interface IProps {
    withBgOnly?: boolean;
}

const BackgroundGradient = ({
    children,
    className,
    withBgOnly,
}: TDefaultProps<IProps>) => {
    return (
        <div
            className={clsx(
                styles.banner,
                withBgOnly && styles['banner--bg-only'],
                className,
            )}
        >
            <div />
            {children}
        </div>
    );
};

export default BackgroundGradient;
