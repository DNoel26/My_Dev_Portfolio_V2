/** @format */

import { logoDarnell, logoScratchpay, logoTheWeekendHack } from '@@assets/images';
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
    MuiCodeIcon,
    MuiEngineeringIcon,
    MuiIconCheckCircleIcon,
    MuiIconCheckCircleOutlineIcon,
} from '@@components/icons';
import BodyContainer from '@@components/layouts/BodyContainer';
import BackgroundGradient from '@@components/ui/BackgroundGradient';
import Button from '@@components/ui/Button';
import Heading from '@@components/ui/Heading';
import Image from '@@components/ui/Image';
import { ANCHOR_TAG, CSS_GLOBAL_CLASS_NAME } from '@@lib/constants';
import { TDefaultProps } from '@@types/client/props.types';
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
    Icon: ReactNode;
    Logo?: ReactNode;
    skills?: string[];
}

type TTimePeriodProps = Pick<ITimelineItem, 'startDate' | 'endDate'> & {
    intervalString: string;
};

interface ITimelineItemsProps {
    items: ITimelineItem[];
}

interface ISkillsProps {
    skills: string[];
}

interface IParagraphsProps {
    paragraphs: string[];
}

interface ISkillTraitsProps {
    skillTraits: string[];
    Icon: ReactNode;
}

const today = new Date();

const monthAndYearToLongFormat = (date: Date) => {
    if (date === today) return 'Present';
    return new Intl.DateTimeFormat('en-UK', { month: 'long', year: 'numeric' }).format(
        date,
    );
};

const timelineItems: ITimelineItemsProps['items'] = [
    {
        startDate: new Date('2022-03-31'),
        endDate: today,
        company: 'Scratch Financial, CA, USA (Remote)',
        about:
            'Builds software products to support over 12,000 clinics and their users' +
            ' throughout the U.S. and Canada.',
        jobTitle: 'Software Engineer',
        paragraphs: [
            'Takes ownership of new features. Delivers well tested, quality code to production across microservices and tech stacks,' +
                ' including front-end, back-end and 3rd party integrations (e.g. Mailgun email service).',
            'Works alongside product owner and lead designer to implement new designs and functionalities' +
                ' using mockups, with suggestions to improve the UI/UX.',
            'Upgrades legacy projects, handling multiple breaking changes.',
            'Improves documentation, logging, automated testing and error handling across the stack.',
            'Works individually or with teammates to debug and implement fixes for various issues' +
                ' across one or more services in production.',
            'Reviews code challenges and conducts technical interviews with candidates.',
            'On boards and mentors new team members.',
            'Works with cross-functional teams across multiple timezones to provide value to our users.',
        ],
        Icon: <MuiCodeIcon />,
        Logo: <Image src={logoScratchpay} alt='' />,
        skills: [
            'HTML',
            'CSS',
            'Sass',
            'JavaScript',
            'TypeScript',
            'PHP',
            'React.js',
            'Redux',
            'Laravel',
            'MySQL',
            'PostgreSQL',
            'Node.js',
            'Express.js',
            'Firebase',
            'Google Cloud Platform',
            'Jest',
            'PHPUnit',
            'Enzyme',
            'React Testing Library',
            'Docker',
            'Gitlab',
            'Jira',
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
            'Spearheads various projects individually and across several teams.',
            'Updates knowledge on familiar tools and learns new ones to improve technical capabilities.',
        ],
        Icon: <MuiCodeIcon />,
        Logo: <Image src={logoDarnell} alt='' />,
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
            'Jest',
            'Figma',
            'Github',
            'Postman',
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
        Icon: <MuiCodeIcon />,
        Logo: <Image src={logoTheWeekendHack} alt='' />,
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'MySQL',
            'MongoDB',
            'Mongoose',
            'Node.js',
            'Express.js',
            'Git',
            'Github',
            'Handlebars',
            'React.js',
            'Heroku',
        ],
    },
    {
        startDate: new Date('2014-01-31'),
        endDate: new Date('2022-03-31'),
        company: '',
        about: '',
        jobTitle: 'Mechanical Engineer',
        paragraphs: [],
        Icon: <MuiEngineeringIcon />,
    },
];

const softSkills: ISkillTraitsProps['skillTraits'] = [
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

const hardSkills: ISkillTraitsProps['skillTraits'] = [
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

const TimePeriod = ({
    startDate,
    endDate,
    intervalString,
    className,
}: TDefaultProps<TTimePeriodProps>) => (
    <div className={className}>
        <span>
            {monthAndYearToLongFormat(startDate)} to {monthAndYearToLongFormat(endDate)}
        </span>
        <br />
        <span>({intervalString})</span>
    </div>
);

const Skills = ({ skills }: ISkillsProps) => {
    return skills.map((skill) => {
        return <MuiChip key={skill} label={skill} />;
    });
};

const Paragraphs = ({ paragraphs }: IParagraphsProps) => {
    return paragraphs.map((paragraph) => (
        <li key={paragraph}>
            <span>-</span>
            <span>{paragraph}</span>
        </li>
    ));
};

const TimelineItems = ({ items }: ITimelineItemsProps) => {
    return items.map((item) => {
        const {
            startDate,
            endDate,
            company,
            about,
            jobTitle,
            paragraphs,
            Icon,
            Logo,
            skills,
        } = item;
        const hasSkills = !!skills && !!skills.length;
        const hasJobDetails = !!paragraphs.length;
        const { years, months } = intervalToDuration({
            start: startDate,
            end: endDate,
        });
        const yearString = (!!years && `${years} year${years > 1 ? 's' : ''}`) || '';
        const monthString = (!!months && `${months} month${months > 1 ? 's' : ''}`) || '';
        const intervalString = yearString + (yearString ? ' ' : '') + monthString;

        return (
            <MuiTimelineItem key={company} className={styles.overview__timeline_item}>
                <MuiTimelineOppositeContent
                    className={styles.overview__timeline_opposite_content}
                >
                    <TimePeriod
                        className={styles.overview__time_period_opposite}
                        startDate={startDate}
                        endDate={endDate}
                        intervalString={intervalString}
                    />
                    {hasSkills && (
                        <>
                            <br />
                            <div className={styles.overview__chips}>
                                <Skills skills={skills} />
                            </div>
                        </>
                    )}
                </MuiTimelineOppositeContent>
                <MuiTimelineSeparator className={styles.overview__timeline_separator}>
                    <MuiTimelineConnector
                        className={styles.overview__timeline_connector_secondary}
                    />
                    <MuiTimelineDot className={styles.overview__timeline_dot}>
                        {Icon}
                    </MuiTimelineDot>
                    <MuiTimelineConnector
                        className={styles.overview__timeline_connector_primary}
                    />
                </MuiTimelineSeparator>
                <MuiTimelineContent
                    className={clsx(
                        styles.overview__timeline_content,
                        !hasJobDetails && styles['overview__timeline_content--mech'],
                    )}
                >
                    <TimePeriod
                        className={styles.overview__time_period}
                        startDate={startDate}
                        endDate={endDate}
                        intervalString={intervalString}
                    />
                    <div className={styles.overview__timeline_logo}>{Logo}</div>
                    <MuiTypography
                        variant='h3'
                        component='div'
                        sx={{ fontWeight: 'bold' }}
                    >
                        {jobTitle}
                    </MuiTypography>
                    <MuiTypography variant='h4' component='div'>
                        {company}
                    </MuiTypography>
                    <MuiTypography component='div'>{about}</MuiTypography>
                    {hasJobDetails && (
                        <>
                            <br />
                            <ul className={styles.overview__timeline_paragraph}>
                                <Paragraphs paragraphs={paragraphs} />
                            </ul>
                        </>
                    )}
                </MuiTimelineContent>
            </MuiTimelineItem>
        );
    });
};

const SkillTraits = ({ skillTraits: skills, Icon }: ISkillTraitsProps) => {
    return skills.map((skill) => {
        return (
            <li key={skill}>
                {Icon} <span>{skill}</span>
            </li>
        );
    });
};

const ProfessionalOverview = () => {
    return (
        <MuiBox
            className={clsx(CSS_GLOBAL_CLASS_NAME.THEME_BG, styles.overview)}
            component='section'
        >
            <div>
                <BodyContainer className={styles.overview__container}>
                    <Heading
                        id={ANCHOR_TAG.HOME_PAGE.EXPERIENCE}
                        subHeading='Professional Experience'
                        heading='Career Journey'
                    />
                    <MuiTimeline className={styles.overview__timeline} position='right'>
                        <TimelineItems items={timelineItems} />
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
                                <SkillTraits
                                    skillTraits={softSkills}
                                    Icon={<MuiIconCheckCircleOutlineIcon />}
                                />
                            </ul>
                        </BackgroundGradient>
                        <div className={styles.overview__skills_hard}>
                            <h3>Hard Skills</h3>
                            <MuiDivider variant='fullWidth' />
                            <ul>
                                <SkillTraits
                                    skillTraits={hardSkills}
                                    Icon={<MuiIconCheckCircleIcon />}
                                />
                            </ul>
                        </div>
                    </div>
                    <Button
                        className={styles.overview__btn}
                        customVariant='default'
                        href='https://drive.google.com/file/d/1Sbr76J5vd0Adm0OdvVzJdMBTbYZvMR5U/view?usp=sharing'
                        LinkComponent='a'
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                        // @ts-ignore
                        target='_blank'
                    >
                        View Resume
                    </Button>
                </BodyContainer>
            </div>
        </MuiBox>
    );
};

export default ProfessionalOverview;
