/** @format */

import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import HighlightedText from './HighlightedText';

import styles from './SubHeading.module.scss';

const SubHeading = ({ children }: TDefaultPropsWithChildren) => {
    return <HighlightedText className={styles.sub_heading}>{children}</HighlightedText>;
};

export default SubHeading;
