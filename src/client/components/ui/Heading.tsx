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
    Tag?: 'h1' | 'h2';
}

const Heading = ({
    id,
    subHeading,
    heading,
    className,
    disablePaddingTop,
    Tag = 'h2',
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
            <Tag>
                {heading}
                <HighlightedText>.</HighlightedText>
            </Tag>
        </div>
    );
};

export default Heading;
