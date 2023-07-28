/** @format */

import { logoGithubBlack, logoLinkedIn, logoWhatsapp } from '@@assets/images';
import { EXTERNAL_URL } from '@@lib/constants/routes/urls';
import { ComponentProps } from 'react';
import styles from './SocialMediaLinks.module.scss';
import Image from './ui/Image';

interface ILogoLinkProps {
    href: string;
    src: ComponentProps<typeof Image>['src'];
    alt: ComponentProps<typeof Image>['alt'];
}

const srcLogos = [
    { href: EXTERNAL_URL.LINKEDIN, src: logoLinkedIn, alt: 'My LinkedIn page' },
    { href: EXTERNAL_URL.GITHUB, src: logoGithubBlack, alt: 'My Github page' },
    { href: EXTERNAL_URL.WHATSAPP, src: logoWhatsapp, alt: 'My Whatsapp contact' },
] as const;

const SocialMediaLink = ({ href, src, alt }: ILogoLinkProps) => {
    return (
        <a className={styles.social_media_links__link} href={href} target='_blank'>
            <Image
                className={styles.social_media_links__link_img}
                src={src}
                alt={alt}
                height={24}
            />
        </a>
    );
};

const SocialMediaLinks = () => {
    return (
        <div className={styles.social_media_links}>
            {srcLogos.map((logo) => {
                const { href, src, alt } = logo;
                return <SocialMediaLink key={href} href={href} src={src} alt={alt} />;
            })}
        </div>
    );
};

export default SocialMediaLinks;
