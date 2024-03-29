/** @format */

import { MuiButtonGroup } from '@@client';
import SocialMediaLinks from '@@components/SocialMediaLinks';
import BodyContainer from '@@components/layouts/BodyContainer';
import Button from '@@components/ui/Button';
import Heading from '@@components/ui/Heading';
import HighlightedText from '@@components/ui/HighlightedText';
import useColorThemeToggle from '@@hooks/useColorThemeToggle';
import useMediaQuery from '@@hooks/useMediaQuery';
import { ANCHOR_TAG } from '@@lib/constants';
import { cssExports } from '@@styles/exports';
import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { useRouter } from 'next/router';
import { ReactNode } from 'react';
import { TypeAnimation } from 'react-type-animation';

import styles from './Hero.module.scss';

interface IProps extends TDefaultProps {
    ImgComponent: ReactNode;
}

const TEXT_ANIM_WAIT_IN_MS = 5000;

const Hero = ({ ImgComponent, className }: IProps) => {
    const { handleToggle } = useColorThemeToggle();
    const router = useRouter();
    const matches = useMediaQuery(`(min-width:${cssExports['breakpoint-md-tablet']})`);

    return (
        <BodyContainer
            id={ANCHOR_TAG.HOME_PAGE.INTRO}
            className={clsx(styles.hero, className)}
            component='section'
        >
            <div className={styles.hero__info_container}>
                <div>
                    <Heading
                        className={styles.hero__heading}
                        subHeading='Developer Portfolio'
                        heading="Hi, I'm Darnell Noel"
                        Tag='h1'
                    />
                    <span className={styles.hero__intro}>
                        And I create <strong>fast</strong> and <strong>modern</strong>{' '}
                        <div className={styles.hero__animated_text}>
                            <TypeAnimation
                                preRenderFirstString
                                sequence={[
                                    'web applications',
                                    TEXT_ANIM_WAIT_IN_MS,
                                    'websites',
                                    TEXT_ANIM_WAIT_IN_MS,
                                ]}
                                repeat={Infinity}
                            />
                            <HighlightedText>.</HighlightedText>
                        </div>
                    </span>
                </div>
                <MuiButtonGroup
                    className={styles.hero__btn_group}
                    orientation={matches ? 'horizontal' : 'vertical'}
                    fullWidth={!matches}
                >
                    <Button
                        className={styles.hero__btn}
                        customVariant='default'
                        onClick={() => {
                            router.push({ hash: ANCHOR_TAG.APP.CONTACT });
                        }}
                    >
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
            <div className={styles.hero__img_container}>{ImgComponent}</div>
        </BodyContainer>
    );
};

export default Hero;
