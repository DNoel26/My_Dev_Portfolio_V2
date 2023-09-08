/** @format */

import BannerTools from '@@components/BannerTools';
import TextBody from '@@components/TextBody';
import Heading from '@@components/ui/Heading';
import HighlightedText from '@@components/ui/HighlightedText';
import { ANCHOR_TAG } from '@@lib/constants';
import styles from './TechOverview.module.scss';

const TechOverview = () => {
    return (
        <section className={styles.overview}>
            <Heading
                id={ANCHOR_TAG.HOME_PAGE.SKILLS}
                subHeading='Developer Skills'
                heading='Tools and Technologies'
            />
            <TextBody>
                Below are some of the tools that I have{' '}
                <HighlightedText>
                    <strong>learned</strong>
                </HighlightedText>{' '}
                and{' '}
                <HighlightedText>
                    <strong>used</strong>
                </HighlightedText>{' '}
                in my projects or workplace. I have a strong preference for TypeScript,
                Sass, React.js, MUI, PostGreSQL, Prisma, Next.js, Node.js and Express.js.
            </TextBody>
            <BannerTools className={styles.overview__banner} />
        </section>
    );
};

export default TechOverview;
