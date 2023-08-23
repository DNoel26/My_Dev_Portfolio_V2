/** @format */

import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import styles from './TextBody.module.scss';
import HighlightedText from './ui/HighlightedText';

const TextBody = ({ children }: TDefaultPropsWithChildren) => {
    return (
        <div className={styles.body}>
            <div className={styles.body__text}>{children}</div>
            <div className={styles.body__separator}>
                <HighlightedText>{'_'.repeat(25)}</HighlightedText>
            </div>
        </div>
    );
};

export default TextBody;
