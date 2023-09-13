/** @format */

import {
    svgLogoMui,
    svgLogoNext,
    svgLogoReact,
    svgLogoSass,
    svgLogoTypeScript,
} from '@@assets/svgs';
import ContactSection from '@@components/ContactSection';
import SocialMediaLinks from '@@components/SocialMediaLinks';
import HighlightedText from '@@components/ui/HighlightedText';
import Link from '@@components/ui/Link';
import Logo from '@@components/ui/Logo';
import WrapperIcon from '@@components/ui/WrapperIcon';
import { ANCHOR_TAG, EXTERNAL_URL, MY_INFO } from '@@lib/constants';
import BodyContainer from './BodyContainer';
import styles from './Footer.module.scss';

interface ILinks {
    href: string;
    title: string;
}

const { GITHUB, LINKEDIN, WHATSAPP } = EXTERNAL_URL;

const links: ILinks[] = [
    {
        href: `tel:${MY_INFO.PHONE}`,
        title: 'Call Me',
    },
    {
        href: `mailto:${MY_INFO.EMAIL}`,
        title: 'Send Email',
    },
    {
        href: GITHUB,
        title: 'View Github',
    },
    {
        href: LINKEDIN,
        title: 'View LinkedIn',
    },
    {
        href: WHATSAPP,
        title: 'WhatsApp Me',
    },
];

const Links = () => {
    return links.map((link) => {
        const { href, title } = link;
        return (
            <li key={title}>
                <Link href={href} isExternal>
                    {title}
                </Link>
            </li>
        );
    });
};

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer__top}>
                <ContactSection />
            </div>
            <div id={ANCHOR_TAG.APP.BOTTOM} className={styles.footer__bottom}>
                <BodyContainer>
                    <div className={styles.footer__container}>
                        <div>
                            <Logo className={styles.footer__my_logo} />
                            <div className={styles.footer__social_media_icons}>
                                <SocialMediaLinks />
                            </div>
                        </div>
                        <div>
                            <ul>
                                <li>
                                    <h4>Contact Me</h4>
                                </li>
                                <br />
                                <Links />
                            </ul>
                        </div>
                    </div>
                    <div className={styles.footer__built_using}>
                        <HighlightedText>- BUILT USING -</HighlightedText>
                        <div className={styles.footer__logos}>
                            <WrapperIcon alt='' src={svgLogoSass} />
                            <WrapperIcon alt='' src={svgLogoTypeScript} />
                            <WrapperIcon alt='' src={svgLogoReact} />
                            <WrapperIcon alt='' src={svgLogoMui} />
                            <WrapperIcon alt='' src={svgLogoNext} />
                        </div>
                    </div>
                    <div className={styles.footer__copyright}>
                        <p>Copyright © 2021 Darnell Noel. All rights reserved.</p>
                        <p>Javascript must be enabled to use this site.</p>
                    </div>
                </BodyContainer>
            </div>
        </footer>
    );
};

export default Footer;
