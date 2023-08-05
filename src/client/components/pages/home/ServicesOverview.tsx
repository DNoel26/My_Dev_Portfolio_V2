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

const PLACEHOLDER_TEXT = 'Some placeholder text here. '.repeat(5);
const infoCards: ICardInfo[] = [
    {
        src: svgIconWww,
        alt: '',
        heading: 'Website Development',
        text: PLACEHOLDER_TEXT,
    },
    {
        src: svgIconConcept,
        alt: '',
        heading: 'App Development',
        text: PLACEHOLDER_TEXT,
    },
    {
        src: svgIconResponsive,
        alt: '',
        heading: 'Designs For All Devices',
        text: PLACEHOLDER_TEXT,
    },
    {
        src: svgIconTarget2,
        alt: '',
        heading: 'Fully Remote Work',
        text: PLACEHOLDER_TEXT,
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
        text: PLACEHOLDER_TEXT,
    },
    {
        src: svgIconWebOptimization,
        alt: '',
        heading: 'Performance Optimization',
        text: PLACEHOLDER_TEXT,
    },
    {
        src: svgIconTarget,
        alt: '',
        heading: 'Accessibility Optimization',
        text: PLACEHOLDER_TEXT,
    },
    {
        src: svgIconVisitor,
        alt: '',
        heading: 'Data Analytics',
        text: PLACEHOLDER_TEXT,
    },
    {
        src: svgIconTechnicalSupport,
        alt: '',
        heading: 'Maintenance Support',
        text: PLACEHOLDER_TEXT,
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
