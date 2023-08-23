/** @format */

import { logoDarnell, logoFearnleyGroup, logoRcnChemicals } from '@@assets/images';
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
    },
    {
        src: logoRcnChemicals,
        alt: '',
        heading: 'E-Commerce Store',
        href: 'https://rcn-chemicals.vercel.app',
    },
    {
        src: logoFearnleyGroup,
        alt: '',
        heading: 'Engineering Calculator',
        href: 'https://fpg-engineering-app-staging.vercel.app',
    },
];

const ProjectsOverview = () => {
    return (
        <section className={styles.overview}>
            <Heading
                id={ANCHOR_TAG.HOME_PAGE.PROJECTS}
                subHeading='Developer Projects'
                heading='My Work'
            />
            <BodyContainer>
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
                        const { src, alt, heading, href } = project;
                        return (
                            <ProjectCard
                                key={heading}
                                src={src}
                                alt={alt}
                                heading={heading}
                                href={href}
                            />
                        );
                    })}
                </div>
            </BodyContainer>
        </section>
    );
};

export default ProjectsOverview;
