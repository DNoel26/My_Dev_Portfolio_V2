/** @format */

import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import clsx from 'clsx';
import styles from './HighlightedText.module.scss';

const HighlightedText = ({ children, className }: TDefaultPropsWithChildren) => {
    return <span className={clsx(styles.text, className)}>{children}</span>;
};

export default HighlightedText;
