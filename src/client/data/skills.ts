/** @format */

import * as Svg from '@@assets/svgs';
import { StaticImageData } from 'next/image';

export interface ISkill {
    NAME: string;
    PROFICIENCY: 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED';
    ICON_LIGHT: StaticImageData;
    ICON_DARK?: StaticImageData;
}

const FRONT_END_SKILLS: readonly ISkill[] = [
    {
        NAME: 'HTML5',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoHtml,
    },
    {
        NAME: 'CSS3',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoCss,
    },
    {
        NAME: 'Sass',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoSass,
    },
    {
        NAME: 'Bootstrap',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoBootstrap,
    },
    {
        NAME: 'React',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoReact,
    },
    {
        NAME: 'Redux',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoRedux,
    },
    {
        NAME: 'MUI',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoMui,
    },
    {
        NAME: 'Chakra UI',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoChakra,
    },
] as const;

const BACK_END_SKILLS: readonly ISkill[] = [
    {
        NAME: 'PHP',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoPhp,
    },
    {
        NAME: 'Express',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoExpress,
    },
    {
        NAME: 'Node',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoNode,
    },
    {
        NAME: 'Firebase',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoFirebase,
    },
    {
        NAME: 'MySQL',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoMySql,
    },
    {
        NAME: 'PostGreSQL',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoPostgreSql,
    },
    {
        NAME: 'MongoDB',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoMongoDb,
    },
    {
        NAME: 'Google Cloud Platform',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoGoogleCloud,
    },
    {
        NAME: 'Knex.js',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoKnex,
    },
    {
        NAME: 'Prisma',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoPrisma,
    },
] as const;

const FULL_STACK_SKILLS: readonly ISkill[] = [
    {
        NAME: 'JavaScript',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoJavaScript,
    },
    {
        NAME: 'TypeScript',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoTypeScript,
    },
    {
        NAME: 'Handlebars',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoHandlebars,
    },
    {
        NAME: 'Next.js',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoNext,
    },
    {
        NAME: 'Laravel',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoLaravel,
    },
    {
        NAME: 'Jest',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoJest,
    },
] as const;

const OTHER_SKILLS: readonly ISkill[] = [
    {
        NAME: 'Figma',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoFigma,
    },
    {
        NAME: 'Git',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoGit,
    },
    {
        NAME: 'Gitlab',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoGitlab,
    },
    {
        NAME: 'Github',
        PROFICIENCY: 'ADVANCED',
        ICON_LIGHT: Svg.svgLogoGithub,
    },
    {
        NAME: 'Docker',
        PROFICIENCY: 'BEGINNER',
        ICON_LIGHT: Svg.svgLogoDocker,
    },
    {
        NAME: 'Mailgun',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoMailgun,
    },
    {
        NAME: 'Postman',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoPostman,
    },
    {
        NAME: 'Swagger',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoSwagger,
    },
    {
        NAME: 'Babel',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoBabel,
    },
    {
        NAME: 'Webpack',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoWebpack,
    },
    {
        NAME: 'Jira',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoJira,
    },
    {
        NAME: 'Confluence',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoConfluence,
    },
    {
        NAME: 'Netlify',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoNetlify,
    },
    {
        NAME: 'Vercel',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoVercel,
    },
    {
        NAME: 'Heroku',
        PROFICIENCY: 'INTERMEDIATE',
        ICON_LIGHT: Svg.svgLogoHeroku,
    },
] as const;

const SKILLS = [
    ...FRONT_END_SKILLS,
    ...BACK_END_SKILLS,
    ...FULL_STACK_SKILLS,
    ...OTHER_SKILLS,
];

export { SKILLS };
