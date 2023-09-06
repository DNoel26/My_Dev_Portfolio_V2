/** @format */

import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import Marquee from 'react-fast-marquee';
import { ALL_SKILLS, ISkill } from '../data/skills';
import styles from './BannerTools.module.scss';
import BodyContainer from './layouts/BodyContainer';
import WrapperIcon from './ui/WrapperIcon';

type TSkillIcon = {
    name: ISkill['NAME'];
    src: ISkill['ICON'];
    alt: string;
};

const SkillIcon = ({ name, alt, src }: TSkillIcon) => {
    return (
        <div className={styles.banner__icon_wrapper}>
            <WrapperIcon alt={alt} src={src} />
            <span className={styles.banner__icon_text}>{name}</span>
        </div>
    );
};

const Skills = () => {
    return (
        <div className={styles.banner__container}>
            {ALL_SKILLS.map((SKILL) => {
                const { NAME, ICON } = SKILL;
                const title = `${NAME} logo`;
                if (!ICON) return null;

                return <SkillIcon key={NAME} name={NAME} alt={title} src={ICON} />;
            })}
        </div>
    );
};

const BannerSkills = ({ className }: TDefaultProps) => {
    return (
        <div className={clsx(styles.banner, className)}>
            <BodyContainer>
                <Marquee>
                    <Skills />
                </Marquee>
            </BodyContainer>
        </div>
    );
};

export default BannerSkills;
