/** @format */

import { ComponentProps } from 'react';
import styles from './ProjectCard.module.scss';
import Image from './ui/Image';
import Link from './ui/Link';

type TImage = ComponentProps<typeof Image>;

interface IProps {
    src: TImage['src'];
    alt: TImage['alt'];
    heading: string;
    href: string;
}

const ProjectCard = ({ src, alt, heading, href }: IProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.card__logo}>
                <Image src={src} alt={alt} />
            </div>
            <div className={styles.card__details}>
                <h4>{heading}</h4>
                <Link isExternal href={href}>
                    Go to site
                </Link>
            </div>
        </div>
    );
};

export default ProjectCard;
