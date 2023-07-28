/** @format */

import { logoDarnell } from '@@assets/images';
import ContactSection from '@@components/ContactSection';
import SocialMediaLinks from '@@components/SocialMediaLinks';
import Button from '@@components/ui/Button';
import Image from '@@components/ui/Image';
import Link from '@@components/ui/Link';
import { APP_URL } from '@@lib/constants';
import { ANCHOR_TAG, EXTERNAL_URL } from '@@lib/constants/routes/urls';
import clsx from 'clsx';
import BodyContainer from './BodyContainer';
import styles from './Footer.module.scss';

const { HOME, PLAY, PROJECTS } = APP_URL.BASE;
const { HOME: HOME_HASH } = ANCHOR_TAG.HOME_PAGE;
const { GITHUB, LINKEDIN, WHATSAPP } = EXTERNAL_URL;

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <ContactSection />
            </div>
            <div className={styles.footer__middle}>
                <BodyContainer>
                    <div className={styles.footer__middle_container}>
                        <h2>Take a break</h2>
                        <Button className={styles.footer__middle_btn}>Play Now</Button>
                    </div>
                </BodyContainer>
            </div>
            <div className={styles.footer__bottom}>
                <BodyContainer>
                    <div className={styles.footer__bottom_container}>
                        <ul>
                            <li>
                                <h4>My Portfolio</h4>
                            </li>
                            <li>
                                <Link href={{ pathname: HOME, hash: HOME_HASH }}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href={PROJECTS}>Projects</Link>
                            </li>
                            <li>
                                <Link href={PLAY}>Let&apos;s Play a Game</Link>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Social Media</h4>
                            </li>
                            <li>
                                <a href={LINKEDIN}>LinkedIn</a>
                            </li>
                            <li>
                                <a href={GITHUB}>Github</a>
                            </li>
                            <li>
                                <a href={WHATSAPP}>WhatsApp</a>
                            </li>
                        </ul>
                        <ul>
                            <li>
                                <h4>Contact Me</h4>
                            </li>
                            <li>
                                <a href={LINKEDIN}>Call Now</a>
                            </li>
                            <li>
                                <a href={GITHUB}>Send Email</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.footer__bottom_container}>
                        <Link
                            className={styles.footer__bottom_logo}
                            href={{ pathname: HOME, hash: HOME_HASH }}
                        >
                            <Image src={logoDarnell} alt='My signature logo' />
                        </Link>
                        <SocialMediaLinks />
                    </div>
                    <div
                        className={clsx(
                            styles.footer__bottom_container,
                            styles['footer__bottom_container--copyright'],
                        )}
                    >
                        <p>Copyright © 2021 Darnell Noel. All rights reserved.</p>
                        <p>Javascript must be enabled to use this site.</p>
                    </div>
                </BodyContainer>
            </div>
        </footer>
    );
};

export default Footer;
