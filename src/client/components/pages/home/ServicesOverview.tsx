/** @format */

import {
    svgIconConcept,
    svgIconResponsive,
    svgIconSeo,
    svgIconTarget,
    svgIconTarget2,
    svgIconTechnicalSupport,
    svgIconVisitor,
    svgIconWebMaintenance,
    svgIconWebOptimization,
    svgIconWww,
} from '@@assets/svgs';
import BodyContainer from '@@components/layouts/BodyContainer';
import Heading from '@@components/ui/Heading';
import Image from '@@components/ui/Image';
import { ANCHOR_TAG } from '@@lib/constants';
import { ComponentProps } from 'react';
import styles from './ServicesOverview.module.scss';

interface ICardInfo {
    src: ComponentProps<typeof Image>['src'];
    alt: ComponentProps<typeof Image>['alt'];
    heading: string;
    text: string;
}

const infoCards: ICardInfo[] = [
    {
        src: svgIconWww,
        alt: '',
        heading: 'Website Development',
        text: 'Not a graphic designer or artist, but can build you a good-looking website to effectively promote your business online! Let me know what themes you like and if in need of advanced or custom graphics, we can still discuss a way forward.',
    },
    {
        src: svgIconConcept,
        alt: '',
        heading: 'App Development',
        text: 'Need an app to start or scale your business? Interested in your own Software as a Service (SaaS)? My team and I would love to help you out.',
    },
    {
        src: svgIconResponsive,
        alt: '',
        heading: 'Designs For All Devices',
        text: 'Websites are guaranteed to be mobile-friendly and scale well to users on all devices, large or small! This also helps improve your ranking in search engines, making your website easier to find.',
    },
    {
        src: svgIconTarget2,
        alt: '',
        heading: 'Fully Remote Work',
        text: 'No matter where you are located, I will work with you professionally to get the job done! Feel free to contact me for more details at your convenience.',
    },
    {
        src: svgIconWebMaintenance,
        alt: '',
        heading: '',
        text: '',
    },
    {
        src: svgIconSeo,
        alt: '',
        heading: 'Search Engine Optimization',
        text: 'Search Engine Optimization increases your website visibility on search engines like Google! This helps with directing more traffic to you, resulting in more opportunities to convert prospects into your customers.',
    },
    {
        src: svgIconWebOptimization,
        alt: '',
        heading: 'Performance Optimization',
        text: 'Speed matters! Fast sites have been shown to increase visitor retention and user satisfaction. Research done by Google has shown that the chance of losing a visitor increases by over 30% when load time increases from just 1 second to 3.',
    },
    {
        src: svgIconTarget,
        alt: '',
        heading: 'Accessibility Optimization',
        text: 'Websites will be designed to be user friendly for people with disabilities! This includes those who use assistive technologies such as screen readers and those that navigate without a mouse.',
    },
    {
        src: svgIconVisitor,
        alt: '',
        heading: 'Data Analytics',
        text: '',
    },
    {
        src: svgIconTechnicalSupport,
        alt: '',
        heading: 'Maintenance Support',
        text: 'Websites will be coded for readability and ease of maintenance! Maintenance includes checking for issues or mistakes, and updating your website to ensure that it remains relevant.',
    },
];

const Card = ({ src, alt, text, heading }: ICardInfo) => {
    if (!heading) return null;
    return (
        <div className={styles.services__card}>
            <Image src={src} alt={alt} height={64} width={64} />
            <h4>{heading}</h4>
            <p>{text}</p>
        </div>
    );
};

const ServicesOverview = () => {
    return (
        <section className={styles.services}>
            <Heading
                id={ANCHOR_TAG.HOME_PAGE.SERVICES}
                subHeading='Developer Services'
                heading='Software Engineering'
            />
            <BodyContainer className={styles.services__container}>
                {infoCards.map((info) => {
                    const { src, alt, heading, text } = info;
                    return (
                        <Card
                            key={JSON.stringify(src)}
                            src={src}
                            alt={alt}
                            heading={heading}
                            text={text}
                        />
                    );
                })}
            </BodyContainer>
        </section>
    );
};

export default ServicesOverview;
