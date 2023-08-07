/** @format */

import { imgMeSitting } from '@@assets/images';
import SocialMediaLinks from '@@components/SocialMediaLinks';
import BodyContainer from '@@components/layouts/BodyContainer';
import Button from '@@components/ui/Button';
import Heading from '@@components/ui/Heading';
import HighlightedText from '@@components/ui/HighlightedText';
import Image from '@@components/ui/Image';
import { ANCHOR_TAG } from '@@lib/constants';
import styles from './HeroHome.module.scss';

const HeroHome = () => {
    return (
        <BodyContainer
            id={ANCHOR_TAG.HOME_PAGE.INTRO}
            className={styles.hero}
            component='section'
        >
            <div className={styles.hero__info_container}>
                <h1>
                    <Heading
                        className={styles.hero__heading}
                        subHeading='Developer Portfolio'
                        heading="Hi, I'm Darnell Noel"
                    />
                    <span className={styles.hero__intro}>
                        And I build <strong>fast</strong> and <strong>modern</strong> web
                        applications<HighlightedText>.</HighlightedText>
                    </span>
                </h1>
                <Button className={styles.hero__btn} customVariant='default'>
                    Get in touch
                </Button>
                <SocialMediaLinks />
            </div>
            <div className={styles.hero__img_container}>
                <div className={styles.hero__bg} />
                <div className={styles.hero__bg_outline} />
                <Image
                    className={styles.hero__img}
                    src={imgMeSitting}
                    alt='Profile pic of Darnell Noel'
                />
            </div>
        </BodyContainer>
    );
};

export default HeroHome;
