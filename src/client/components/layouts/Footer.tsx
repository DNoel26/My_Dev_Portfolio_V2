/** @format */

import { logoDarnell } from '@@assets/images';
import ContactSection from '@@components/ContactSection';
import SocialMediaLinks from '@@components/SocialMediaLinks';
import Button from '@@components/ui/Button';
import Image from '@@components/ui/Image';
import Link from '@@components/ui/Link';
import { APP_URL } from '@@lib/constants';
import { EXTERNAL_URL } from '@@lib/constants/routes/urls';
import clsx from 'clsx';
import BodyContainer from './BodyContainer';
import styles from './Footer.module.scss';

const { HOME, PLAY, PROJECTS, ABOUT } = APP_URL.BASE;
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
                                <Link href={HOME}>Home</Link>
                            </li>
                            <li>
                                <Link href={ABOUT}>About Me</Link>
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
                    <div className={styles.footer__bottom_container}>
                        <Link
                            className={styles.footer__bottom_logo}
                            href={{ pathname: HOME }}
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
