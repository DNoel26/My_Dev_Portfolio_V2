/** @format */

import { logoGithubBlack, logoLinkedIn, logoWhatsapp } from '@@assets/images';
import { EXTERNAL_URL } from '@@lib/constants';
import clsx from 'clsx';
import { ComponentProps } from 'react';
import styles from './SocialMediaLinks.module.scss';
import Image from './ui/Image';
import Link from './ui/Link';

interface ILogoLinkProps {
    href: string;
    src: ComponentProps<typeof Image>['src'];
    alt: ComponentProps<typeof Image>['alt'];
    monochromeColor?: 'black' | 'white';
}
type TProps = Pick<ILogoLinkProps, 'monochromeColor'>;

const srcLogos = [
    { href: EXTERNAL_URL.LINKEDIN, src: logoLinkedIn, alt: 'My LinkedIn page' },
    { href: EXTERNAL_URL.GITHUB, src: logoGithubBlack, alt: 'My Github page' },
    { href: EXTERNAL_URL.WHATSAPP, src: logoWhatsapp, alt: 'My Whatsapp contact' },
] as const;

const SocialMediaLink = ({ href, src, alt, monochromeColor }: ILogoLinkProps) => {
    return (
        <Link
            className={clsx(
                styles.social_media_links__link,
                monochromeColor && styles[`social_media_links__link--${monochromeColor}`],
            )}
            href={href}
            isExternal
        >
            <Image
                className={styles.social_media_links__link_img}
                src={src}
                alt={alt}
                height={24}
            />
        </Link>
    );
};

const SocialMediaLinks = ({ monochromeColor }: TProps) => {
    return (
        <div className={styles.social_media_links}>
            {srcLogos.map((logo) => {
                const { href, src, alt } = logo;
                return (
                    <SocialMediaLink
                        key={href}
                        href={href}
                        src={src}
                        alt={alt}
                        monochromeColor={monochromeColor}
                    />
                );
            })}
        </div>
    );
};

export default SocialMediaLinks;
