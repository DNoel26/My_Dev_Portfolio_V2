/** @format */

import * as Svg from '@@assets/svgs';
import { StaticImageData } from 'next/image';

export interface ISkill {
    NAME: string;
    PROFICIENCY: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
    ICON: StaticImageData;
}

const FRONT_END_SKILLS: readonly ISkill[] = [
    {
        NAME: 'HTML5',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoHtml,
    },
    {
        NAME: 'CSS3',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoCss,
    },
    {
        NAME: 'Sass',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoSass,
    },
    {
        NAME: 'Bootstrap',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoBootstrap,
    },
    {
        NAME: 'React',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoReact,
    },
    {
        NAME: 'Redux',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoRedux,
    },
    {
        NAME: 'MUI',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoMui,
    },
    {
        NAME: 'Chakra UI',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoChakra,
    },
] as const;

const BACK_END_SKILLS: readonly ISkill[] = [
    {
        NAME: 'PHP',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoPhp,
    },
    {
        NAME: 'Express',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoExpress,
    },
    {
        NAME: 'Node',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoNode,
    },
    {
        NAME: 'Firebase',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoFirebase,
    },
    {
        NAME: 'MySQL',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoMySql,
    },
    {
        NAME: 'PostGreSQL',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoPostgreSql,
    },
    {
        NAME: 'MongoDB',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoMongoDb,
    },
    {
        NAME: 'GCP',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoGoogleCloud,
    },
    {
        NAME: 'Knex.js',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoKnex,
    },
    {
        NAME: 'Prisma',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoPrisma,
    },
] as const;

const FULL_STACK_SKILLS: readonly ISkill[] = [
    {
        NAME: 'JavaScript',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoJavaScript,
    },
    {
        NAME: 'TypeScript',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoTypeScript,
    },
    {
        NAME: 'Handlebars',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoHandlebars,
    },
    {
        NAME: 'Next.js',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoNext,
    },
    {
        NAME: 'Laravel',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoLaravel,
    },
    {
        NAME: 'Jest',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoJest,
    },
] as const;

const OTHER_SKILLS: readonly ISkill[] = [
    {
        NAME: 'Figma',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoFigma,
    },
    {
        NAME: 'Git',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoGit,
    },
    {
        NAME: 'Gitlab',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoGitlab,
    },
    {
        NAME: 'Github',
        PROFICIENCY: 'ADVANCED',
        ICON: Svg.svgLogoGithub,
    },
    {
        NAME: 'Docker',
        PROFICIENCY: 'BEGINNER',
        ICON: Svg.svgLogoDocker,
    },
    {
        NAME: 'Mailgun',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoMailgun,
    },
    {
        NAME: 'Postman',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoPostman,
    },
    {
        NAME: 'Swagger',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoSwagger,
    },
    {
        NAME: 'Babel',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoBabel,
    },
    {
        NAME: 'Webpack',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoWebpack,
    },
    {
        NAME: 'Jira',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoJira,
    },
    {
        NAME: 'Confluence',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoConfluence,
    },
    {
        NAME: 'Netlify',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoNetlify,
    },
    {
        NAME: 'Vercel',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoVercel,
    },
    {
        NAME: 'Heroku',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoHeroku,
    },
] as const;

const OS_SKILLS: readonly ISkill[] = [
    {
        NAME: 'Windows',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoWindows,
    },
    {
        NAME: 'Mac OS',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoMacOs,
    },
    {
        NAME: 'Linux',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoLinux,
    },
    {
        NAME: 'Ubuntu',
        PROFICIENCY: 'INTERMEDIATE',
        ICON: Svg.svgLogoUbuntu,
    },
] as const;

const TECH_SKILLS = [
    ...FRONT_END_SKILLS,
    ...BACK_END_SKILLS,
    ...FULL_STACK_SKILLS,
    ...OTHER_SKILLS,
];

const ALL_SKILLS = [...TECH_SKILLS, ...OS_SKILLS];

export { ALL_SKILLS, OS_SKILLS, TECH_SKILLS };
