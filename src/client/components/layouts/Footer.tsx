/** @format */

import { logoMui, logoNextJs, logoSass, logoTypeScript } from '@@assets/images';
import { MuiDivider } from '@@client';
import ContactSection from '@@components/ContactSection';
import SocialMediaLinks from '@@components/SocialMediaLinks';
import HighlightedText from '@@components/ui/HighlightedText';
import Link from '@@components/ui/Link';
import Logo from '@@components/ui/Logo';
import WrapperIcon from '@@components/ui/WrapperIcon';
import { ANCHOR_TAG, APP_URL, EXTERNAL_URL } from '@@lib/constants';
import clsx from 'clsx';
import BodyContainer from './BodyContainer';
import styles from './Footer.module.scss';

const { HOME } = APP_URL.BASE;
const { GITHUB, LINKEDIN, WHATSAPP } = EXTERNAL_URL;

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <ContactSection />
            </div>
            <div id={ANCHOR_TAG.APP.BOTTOM} className={styles.footer__bottom}>
                <BodyContainer>
                    <div className={styles.footer__bottom_container}>
                        <Logo className={styles.footer__bottom_logo} />
                        <div className={styles.footer__bottom_links}>
                            <ul>
                                <li>
                                    <h4>My Portfolio</h4>
                                </li>
                                <li>
                                    <Link href={HOME}>Home</Link>
                                </li>
                                <li>
                                    <Link href={HOME}>About Me</Link>
                                </li>
                                <li>
                                    <Link href={HOME}>Projects</Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>Social Media</h4>
                                </li>
                                <li>
                                    <Link href={LINKEDIN} isExternal>
                                        LinkedIn
                                    </Link>
                                </li>
                                <li>
                                    <Link href={GITHUB} isExternal>
                                        Github
                                    </Link>
                                </li>
                                <li>
                                    <Link href={WHATSAPP} isExternal>
                                        WhatsApp
                                    </Link>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>Contact Me</h4>
                                </li>
                                <li>
                                    <Link href={LINKEDIN} isExternal>
                                        Call Now
                                    </Link>
                                </li>
                                <li>
                                    <Link href={GITHUB} isExternal>
                                        Send Email
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <MuiDivider />
                    <div className={styles.footer__bottom_container}>
                        <SocialMediaLinks />
                    </div>
                    <div
                        className={clsx(
                            styles.footer__bottom_container,
                            styles['footer__bottom_container--copyright'],
                        )}
                    >
                        <HighlightedText>- MADE USING -</HighlightedText>
                        <div className={styles.footer__bottom_logos}>
                            <WrapperIcon alt='' src={logoNextJs} />
                            <WrapperIcon alt='' src={logoTypeScript} />
                            <WrapperIcon alt='' src={logoSass} />
                            <WrapperIcon alt='' src={logoMui} />
                        </div>
                        <p>Copyright © 2021 Darnell Noel. All rights reserved.</p>
                        <p>Javascript must be enabled to use this site.</p>
                    </div>
                </BodyContainer>
            </div>
        </footer>
    );
};

export default Footer;
