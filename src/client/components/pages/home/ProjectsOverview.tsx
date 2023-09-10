/** @format */

import { logoDarnell, logoFearnleyGroup, logoRcnChemicals } from '@@assets/images';
import {
    svgLogoChakra,
    svgLogoCss,
    svgLogoFigma,
    svgLogoFirebase,
    svgLogoHtml,
    svgLogoJavaScript,
    svgLogoNext,
    svgLogoNode,
    svgLogoReact,
    svgLogoSass,
    svgLogoTypeScript,
} from '@@assets/svgs';
import ProjectCard from '@@components/ProjectCard';
import TextBody from '@@components/TextBody';
import BodyContainer from '@@components/layouts/BodyContainer';
import Heading from '@@components/ui/Heading';
import HighlightedText from '@@components/ui/HighlightedText';
import { ANCHOR_TAG } from '@@lib/constants';
import { ComponentProps } from 'react';
import styles from './ProjectsOverview.module.scss';

const projects: ComponentProps<typeof ProjectCard>[] = [
    {
        src: logoDarnell,
        alt: '',
        heading: 'Alien Mathvasion Game',
        href: 'https://dnoelmathinvasiongame.netlify.app/html/gamescreen.html',
        details:
            'One of my earliest, most interesting and most challenging development projects. ' +
            'Designed for children ages 8+ with the goal of making math fun and engaging. ' +
            "Visual design is based on retro arcade Shoot 'em up games.",
        tools: [
            { src: svgLogoHtml, alt: '' },
            { src: svgLogoCss, alt: '' },
            { src: svgLogoJavaScript, alt: '' },
        ],
    },
    {
        src: logoRcnChemicals,
        alt: '',
        heading: 'E-Commerce Store',
        href: 'https://rcn-chemicals.vercel.app',
        details:
            'One of my first client websites for use in production. ' +
            'Completely custom made and designed in Figma.',
        tools: [
            { src: svgLogoFigma, alt: '' },
            { src: svgLogoSass, alt: '' },
            { src: svgLogoJavaScript, alt: '' },
            { src: svgLogoReact, alt: '' },
            { src: svgLogoNext, alt: '' },
            { src: svgLogoFirebase, alt: '' },
            { src: svgLogoNode, alt: '' },
        ],
    },
    {
        src: logoFearnleyGroup,
        alt: '',
        heading: 'Engineering Calculator',
        href: 'https://fpg-engineering-app-staging.vercel.app',
        details:
            'An engineering toolbox and calculator app for use in production. ' +
            'Created to handle highly complex calculations and provide feedback for drilling in the oil & gas industry.',
        tools: [
            { src: svgLogoChakra, alt: '' },
            { src: svgLogoSass, alt: '' },
            { src: svgLogoTypeScript, alt: '' },
            { src: svgLogoReact, alt: '' },
            { src: svgLogoNext, alt: '' },
            { src: svgLogoNode, alt: '' },
        ],
    },
];

const ProjectsOverview = () => {
    return (
        <section className={styles.overview}>
            <BodyContainer>
                <Heading
                    id={ANCHOR_TAG.HOME_PAGE.PROJECTS}
                    subHeading='Developer Projects'
                    heading='My Work'
                />
                <TextBody>
                    Below are some of the projects that I have{' '}
                    <HighlightedText>
                        <strong>designed</strong>
                    </HighlightedText>{' '}
                    and{' '}
                    <HighlightedText>
                        <strong>built</strong>
                    </HighlightedText>{' '}
                    ranging from development only, to production. More coming soon!
                </TextBody>
                <div className={styles.overview__projects}>
                    {projects.map((project) => {
                        const { src, alt, heading, href, details, tools } = project;
                        return (
                            <ProjectCard
                                key={heading}
                                src={src}
                                alt={alt}
                                heading={heading}
                                href={href}
                                details={details}
                                tools={tools}
                            />
                        );
                    })}
                </div>
            </BodyContainer>
        </section>
    );
};

export default ProjectsOverview;
