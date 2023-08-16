/** @format */

import {
    MuiBox,
    MuiChip,
    MuiDivider,
    MuiTimeline,
    MuiTimelineConnector,
    MuiTimelineContent,
    MuiTimelineDot,
    MuiTimelineItem,
    MuiTimelineOppositeContent,
    MuiTimelineSeparator,
    MuiTypography,
} from '@@client';
import {
    MuiIconCheckCircle,
    MuiIconCheckCircleOutline,
    MuiIconSupervisedUserCircleTwoTone,
} from '@@components/icons';
import BodyContainer from '@@components/layouts/BodyContainer';
import BackgroundGradient from '@@components/ui/BackgroundGradient';
import Button from '@@components/ui/Button';
import Heading from '@@components/ui/Heading';
import { ANCHOR_TAG, CSS_GLOBAL_CLASS_NAME } from '@@lib/constants';
import clsx from 'clsx';
import { intervalToDuration } from 'date-fns';
import { ReactNode } from 'react';
import styles from './ProfessionalOverview.module.scss';

interface ITimelineItem {
    startDate: Date;
    endDate: Date;
    company: string;
    about?: string;
    jobTitle: string;
    paragraphs: string[];
    Icon: unknown;
    skills?: string[];
}

type TTimePeriodProps = Pick<ITimelineItem, 'startDate' | 'endDate'> & {
    intervalString: string;
};

const today = new Date();

const monthAndYearToLongFormat = (date: Date) => {
    if (date === today) return 'Present';
    return new Intl.DateTimeFormat('en-UK', { month: 'long', year: 'numeric' }).format(
        date,
    );
};

const timelineItems: ITimelineItem[] = [
    {
        startDate: new Date('2022-03-31'),
        endDate: today,
        company: 'Scratch Financial, CA, USA (Remote)',
        about:
            'Builds software products to support over 12,000 clinics and their users' +
            ' throughout the U.S. and Canada.',
        jobTitle: 'Software Engineer',
        paragraphs: [
            'Adds properly tested, quality features to production across microservices and tech stacks,' +
                ' including front-end, back-end and 3rd party integrations (e.g. Mailgun email service).',
            'Works with product owner and lead designer to implement new designs and functionalities' +
                ' to our user app using mockups, with suggestions to improve the UI/UX.',
            'Upgrades projects, handling multiple breaking changes.',
            'Improves logging and error handling on the front-end and back-end.',
            'Improves front-end and back-end automated test coverage.',
            'Works individually or with teammates to debug and implement fixes for various issues' +
                ' across one or more services in production.',
            'Reviews code challenges and conducts technical interviews with candidates.',
            'Assists with onboarding and mentorship of new team members.',
            'Works with a cross-functional team across multiple timezones to provide value to our users.',
        ],
        Icon: <MuiIconSupervisedUserCircleTwoTone />,
        skills: [
            'Laravel',
            'PHP',
            'MySQL',
            'PostgreSQL',
            'JavaScript',
            'TypeScript',
            'Node.js',
            'Express.js',
            'Firebase',
            'Google Cloud Platform',
            'Google Big Query',
            'HTML',
            'CSS',
            'Sass',
            'React.js',
            'Redux',
            'Jest',
            'Chai',
            'PHPUnit',
            'Enzyme',
            'React Testing Library',
            'Docker',
            'Microservices',
            'Gitlab',
            'Agile Methodologies',
            'Debugging',
        ],
    },
    {
        startDate: new Date('2020-11-30'),
        endDate: today,
        company: 'Freelance, Trinidad & Tobago',
        about:
            'Builds applications using UI/UX design, software architecture and clean code principles.' +
            ' Mainly uses Sass, TypeScript, React.js, Next.js, Node.js, Express.js, PostGreSQL.',
        jobTitle: 'Full Stack Developer',
        paragraphs: [
            'Works on various projects individually and across multiple teams.',
            'Learns new tools and languages to improve technical capabilities.',
        ],
        Icon: <MuiIconSupervisedUserCircleTwoTone />,
        skills: [
            'HTML',
            'CSS',
            'Sass',
            'Bootstrap',
            'JavaScript',
            'TypeScript',
            'React.js',
            'Next.js',
            'MySQL',
            'PostGreSQL',
            'MongoDB',
            'Node.js',
            'Express.js',
            'Figma',
            'Github',
            'Postman',
            'Jest',
            'Webpack',
            'Babel',
            'Netlify',
            'Heroku',
            'Vercel',
        ],
    },
    {
        startDate: new Date('2020-01-31'),
        endDate: new Date('2020-11-30'),
        company: 'The Weekend Hack, ON, CA',
        about: 'Provides training on tech fundamentals, computer programming and web development.',
        jobTitle: 'Full Stack Web Development Student',
        paragraphs: [
            'Full stack web development journey started!',
            'Built several projects designed to emulate real world situations.',
        ],
        Icon: <MuiIconSupervisedUserCircleTwoTone />,
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'Git',
            'Github',
            'MySQL',
            'MongoDB',
            'Mongoose',
            'Node.js',
            'Express.js',
            'Postman',
            'Handlebars',
            'React.js',
            'Heroku',
        ],
    },
    {
        startDate: new Date('2018-04-30'),
        endDate: new Date('2022-03-31'),
        company: 'Fearnley Group, Global (Hybrid-Remote)',
        about: 'Provides engineering, QA/QC and technical support to oil & gas companies globally.',
        jobTitle: 'Technical Projects Engineer',
        paragraphs: [],
        Icon: <MuiIconSupervisedUserCircleTwoTone />,
    },
    {
        startDate: new Date('2016-01-31'),
        endDate: new Date('2021-01-31'),
        company: 'Automation Technology College, Trinidad & Tobago',
        about: 'Offers programmes and short courses across multiple disciplines.',
        jobTitle: 'Lecturer (Part Time)',
        paragraphs: [],
        Icon: <MuiIconSupervisedUserCircleTwoTone />,
    },
    {
        startDate: new Date('2015-09-30'),
        endDate: new Date('2018-03-31'),
        company: 'IN-CORR-TECH Limited, Trinidad & Tobago',
        jobTitle: 'Inspection Engineer I',
        paragraphs: [],
        Icon: <MuiIconSupervisedUserCircleTwoTone />,
    },
    {
        startDate: new Date('2014-01-31'),
        endDate: new Date('2015-09-30'),
        company: 'Metal Industries Company Limited, Trinidad & Tobago',
        jobTitle: 'Mechanical Engineering Trainee',
        paragraphs: [],
        Icon: <MuiIconSupervisedUserCircleTwoTone />,
    },
];

const softSkills: string[] = [
    'Analytical and adaptable',
    'Creative and innovative',
    'Logical and objective',
    'Reliable and dependable',
    'Honest and ethical',
    'Fast learner',
    'Self motivated',
    'Effective communicator',
    'Detail oriented',
    'Problem solver',
];

const hardSkills: string[] = [
    'UI/UX and responsive design',
    'Software principles and architecture',
    'Database design and DBMS principles',
    'Functional and object oriented programming',
    'Debugging and automated testing',
    'Serverless and REST API architecture',
    'Data structures and algorithms',
    'SEO, accessibility and optimization',
    'Continuous Integration and deployment',
    'Clean code principles',
];

const TimePeriod = ({ startDate, endDate, intervalString }: TTimePeriodProps) => (
    <>
        <span>
            {monthAndYearToLongFormat(startDate)} to {monthAndYearToLongFormat(endDate)}
        </span>
        <br />
        <span>({intervalString})</span>
    </>
);

const ProfessionalOverview = () => {
    return (
        <MuiBox className={clsx(CSS_GLOBAL_CLASS_NAME.THEME_BG, styles.overview)}>
            <div>
                <BodyContainer className={styles.overview__container}>
                    <Heading
                        id={ANCHOR_TAG.HOME_PAGE.EXPERIENCE}
                        subHeading='Professional Experience'
                        heading='Career Journey'
                    />
                    <MuiTimeline className={styles.overview__timeline} position='right'>
                        {timelineItems.map((item) => {
                            const {
                                startDate,
                                endDate,
                                company,
                                about,
                                jobTitle,
                                paragraphs,
                                Icon,
                                skills,
                            } = item;
                            const hasSkills = !!skills && !!skills.length;
                            const hasJobDetails = !!paragraphs.length;
                            const { years, months } = intervalToDuration({
                                start: startDate,
                                end: endDate,
                            });
                            const yearString =
                                (!!years && `${years} year${years > 1 ? 's' : ''}`) || '';
                            const monthString =
                                (!!months && `${months} month${months > 1 ? 's' : ''}`) ||
                                '';
                            const intervalString =
                                yearString + (yearString ? ' ' : '') + monthString;
                            return (
                                <MuiTimelineItem
                                    key={company}
                                    className={styles.overview__timeline_item}
                                >
                                    <MuiTimelineOppositeContent
                                        className={
                                            styles.overview__timeline_opposite_content
                                        }
                                        sx={{ m: 'auto 0', fontStyle: 'italic', flex: 1 }}
                                        align='right'
                                        variant='body2'
                                    >
                                        <TimePeriod
                                            startDate={startDate}
                                            endDate={endDate}
                                            intervalString={intervalString}
                                        />
                                        {hasSkills && (
                                            <>
                                                <br />
                                                <br />
                                            </>
                                        )}
                                        {hasSkills && (
                                            <div className={styles.overview__chips}>
                                                {skills.map((skill) => {
                                                    return (
                                                        <MuiChip
                                                            key={skill}
                                                            label={skill}
                                                        />
                                                    );
                                                })}
                                            </div>
                                        )}
                                    </MuiTimelineOppositeContent>
                                    <MuiTimelineSeparator>
                                        <MuiTimelineConnector
                                            sx={{ bgcolor: 'secondary.main' }}
                                        />
                                        <MuiTimelineDot>
                                            {Icon as ReactNode}
                                        </MuiTimelineDot>
                                        <MuiTimelineConnector
                                            sx={{ bgcolor: 'primary.main' }}
                                        />
                                    </MuiTimelineSeparator>
                                    <MuiTimelineContent
                                        className={clsx(
                                            styles.overview__timeline_content,
                                            !hasJobDetails &&
                                                styles[
                                                    'overview__timeline_content--mech'
                                                ],
                                        )}
                                        sx={{ py: '12px', px: 2 }}
                                    >
                                        <MuiTypography
                                            variant='h5'
                                            component='div'
                                            sx={{ fontWeight: 'bold' }}
                                        >
                                            {jobTitle}
                                        </MuiTypography>
                                        <MuiTypography variant='h6' component='div'>
                                            {company}
                                        </MuiTypography>
                                        <MuiTypography variant='body1' component='div'>
                                            {about}
                                        </MuiTypography>
                                        {hasJobDetails && (
                                            <>
                                                <br />
                                                <MuiTypography
                                                    className={
                                                        styles.overview__timeline_paragraph
                                                    }
                                                    component='ul'
                                                >
                                                    {paragraphs.map((paragraph) => (
                                                        <li key={paragraph}>
                                                            <span>-</span>
                                                            <span>{paragraph}</span>
                                                        </li>
                                                    ))}
                                                </MuiTypography>
                                            </>
                                        )}
                                    </MuiTimelineContent>
                                </MuiTimelineItem>
                            );
                        })}
                    </MuiTimeline>
                    <Heading
                        id={ANCHOR_TAG.HOME_PAGE.TRAITS}
                        subHeading='Professional Traits'
                        heading='Web Development'
                    />
                    <div className={styles.overview__skills}>
                        <BackgroundGradient
                            className={styles.overview__skills_soft}
                            withBgOnly
                        >
                            <h3>Soft Skills</h3>
                            <MuiDivider variant='fullWidth' />
                            <ul>
                                {softSkills.map((skill) => {
                                    return (
                                        <li key={skill}>
                                            <MuiIconCheckCircleOutline />{' '}
                                            <span>{skill}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </BackgroundGradient>
                        <div className={styles.overview__skills_hard}>
                            <h3>Hard Skills</h3>
                            <MuiDivider variant='fullWidth' />
                            <ul>
                                {hardSkills.map((skill) => {
                                    return (
                                        <li key={skill}>
                                            <MuiIconCheckCircle /> <span>{skill}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                    <Button customVariant='default'>View Resume</Button>
                </BodyContainer>
            </div>
        </MuiBox>
    );
};

export default ProfessionalOverview;
