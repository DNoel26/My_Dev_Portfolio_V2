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
import TextBody from '@@components/TextBody';
import BodyContainer from '@@components/layouts/BodyContainer';
import Heading from '@@components/ui/Heading';
import HighlightedText from '@@components/ui/HighlightedText';
import Image from '@@components/ui/Image';
import { ANCHOR_TAG } from '@@lib/constants';
import { ComponentProps } from 'react';

import styles from './ServicesOverview.module.scss';

interface ICardProps {
    src: ComponentProps<typeof Image>['src'];
    alt: ComponentProps<typeof Image>['alt'];
    heading: string;
}

const infoCards: ICardProps[] = [
    {
        src: svgIconWww,
        alt: '',
        heading: 'Website Development',
    },
    {
        src: svgIconConcept,
        alt: '',
        heading: 'App Development',
    },
    {
        src: svgIconResponsive,
        alt: '',
        heading: 'Designs For All Devices',
    },
    {
        src: svgIconTarget2,
        alt: '',
        heading: 'Fully Remote Work',
    },
    {
        src: svgIconSeo,
        alt: '',
        heading: 'Search Engine Optimization',
    },
    {
        src: svgIconWebOptimization,
        alt: '',
        heading: 'Performance Optimization',
    },
    {
        src: svgIconTarget,
        alt: '',
        heading: 'Accessibility Optimization',
    },
    {
        src: svgIconVisitor,
        alt: '',
        heading: 'Data Analytics',
    },
    {
        src: svgIconWebMaintenance,
        alt: '',
        heading: 'Troubleshooting Support',
    },
    {
        src: svgIconTechnicalSupport,
        alt: '',
        heading: 'Maintenance Support',
    },
];

const Card = ({ src, alt, heading }: ICardProps) => {
    return (
        <div className={styles.overview__card}>
            <Image src={src} alt={alt} />
            <h4>{heading}</h4>
        </div>
    );
};

const ServicesOverview = () => {
    return (
        <section className={styles.overview}>
            <BodyContainer>
                <Heading
                    id={ANCHOR_TAG.HOME_PAGE.SERVICES}
                    subHeading='Developer Services'
                    heading='Software Engineering'
                />
                <TextBody>
                    I believe in thoughtful and quality design from end to end. This means
                    focusing on simplicity, speed, accessibility and consistency for{' '}
                    <HighlightedText>
                        <strong>all</strong>
                    </HighlightedText>{' '}
                    end users.
                </TextBody>
                <div className={styles.overview__cards}>
                    {infoCards.map((info) => {
                        const { src, alt, heading } = info;
                        return (
                            <Card
                                key={JSON.stringify(src)}
                                src={src}
                                alt={alt}
                                heading={heading}
                            />
                        );
                    })}
                </div>
            </BodyContainer>
        </section>
    );
};

export default ServicesOverview;
