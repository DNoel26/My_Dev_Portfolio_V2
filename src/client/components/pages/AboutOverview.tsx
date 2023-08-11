/** @format */

import BodyContainer from '@@components/layouts/BodyContainer';
import Heading from '@@components/ui/Heading';
import HighlightedText from '@@components/ui/HighlightedText';
import { ANCHOR_TAG } from '@@lib/constants';
import styles from './AboutOverview.module.scss';

const AboutOverview = () => {
    return (
        <section className={styles.about}>
            <Heading
                id={ANCHOR_TAG.HOME_PAGE.ABOUT}
                subHeading='Personal Bio'
                heading='About Me'
            />
            <BodyContainer className={styles.about__container}>
                <div className={styles.about__text_container}>
                    <p>
                        Hi I&apos;m Darnell, a mechanical engineer turned full stack web
                        developer from Trinidad & Tobago.
                    </p>
                    <br />
                    <p>
                        In January 2020 I decided to learn to code by enrolling in an
                        intensive web development boot camp for almost one year. It was
                        during this time I realized that this was something I really
                        enjoyed and was talented in.
                    </p>
                    <br />
                    <p>
                        I&apos;ve always had an affinity for using{' '}
                        <HighlightedText>logic</HighlightedText> to solve interesting and
                        difficult problems but soon realized that there was a{' '}
                        <HighlightedText>creative</HighlightedText> side to me that
                        enjoyed the design and conceptualization processes. Now I enjoy
                        working on and building complex and useful digital products!
                    </p>
                    <br />
                    <p>
                        When I&apos;m not coding I enjoy learning new things, playing
                        video games, spending time in nature, traveling or chilling with
                        friends. I also have a great interest in psychology and
                        understanding how the human mind works.
                    </p>
                </div>
            </BodyContainer>
        </section>
    );
};

export default AboutOverview;
