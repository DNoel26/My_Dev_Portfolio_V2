/** @format */

import { MuiButtonGroup } from '@@client';
import SocialMediaLinks from '@@components/SocialMediaLinks';
import BodyContainer from '@@components/layouts/BodyContainer';
import Button from '@@components/ui/Button';
import Heading from '@@components/ui/Heading';
import HighlightedText from '@@components/ui/HighlightedText';
import useColorThemeToggle from '@@hooks/useColorThemeToggle';
import { ANCHOR_TAG } from '@@lib/constants';
import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './Hero.module.scss';

interface IProps extends TDefaultProps {
    ImgComponent: ReactNode;
}

const Hero = ({ ImgComponent, className }: IProps) => {
    const { handleToggle } = useColorThemeToggle();

    return (
        <BodyContainer
            id={ANCHOR_TAG.HOME_PAGE.INTRO}
            className={clsx(styles.hero, className)}
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
                <MuiButtonGroup>
                    <Button className={styles.hero__btn} customVariant='default'>
                        Get in touch
                    </Button>
                    <Button
                        className={styles.hero__btn}
                        customVariant='outlined'
                        onClick={handleToggle}
                    >
                        Personalize
                    </Button>
                </MuiButtonGroup>
                <SocialMediaLinks />
            </div>
            {ImgComponent}
        </BodyContainer>
    );
};

export default Hero;
