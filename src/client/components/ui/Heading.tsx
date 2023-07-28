/** @format */

import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import styles from './Heading.module.scss';
import HighlightedText from './HighlightedText';
import SubHeading from './SubHeading';

interface IProps {
    id?: string;
    subHeading: string;
    heading: string;
    disablePaddingTop?: boolean;
}

const Heading = ({
    id,
    subHeading,
    heading,
    className,
    disablePaddingTop,
}: TDefaultProps<IProps>) => {
    return (
        <div
            className={clsx(
                styles.heading,
                disablePaddingTop && styles['heading--disable-pt'],
                className,
            )}
            id={id}
        >
            <SubHeading>{`- ${subHeading} -`}</SubHeading>
            <h2>
                {heading}
                <HighlightedText>.</HighlightedText>
            </h2>
        </div>
    );
};

export default Heading;
