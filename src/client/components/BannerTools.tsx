/** @format */

import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { ALL_SKILLS, ISkill } from '../data/skills';
import BodyContainer from './layouts/BodyContainer';
import Button from './ui/Button';
import WrapperIcon from './ui/WrapperIcon';

import styles from './BannerTools.module.scss';

type TSkillIcon = {
    name: ISkill['NAME'];
    src: ISkill['ICON'];
    alt: string;
};
interface ISkillsProps {
    skills: readonly ISkill[];
}

const SkillIcon = ({ name, alt, src }: TSkillIcon) => {
    return (
        <div className={styles.banner__icon_wrapper}>
            <WrapperIcon alt={alt} src={src} />
            <span className={styles.banner__icon_text}>{name}</span>
        </div>
    );
};

const Skills = ({ skills }: ISkillsProps) => {
    return (
        <div className={styles.banner__container}>
            {skills.map((skill) => {
                const { NAME, ICON } = skill;
                const title = `${NAME} logo`;
                if (!ICON) return null;

                return <SkillIcon key={NAME} name={NAME} alt={title} src={ICON} />;
            })}
        </div>
    );
};

const BannerSkills = ({ className }: TDefaultProps) => {
    const [showAllTools, setShowAllTools] = useState(false);
    const toggle = () => setShowAllTools((prev) => !prev);

    return (
        <div className={clsx(styles.banner, className)}>
            <BodyContainer>
                {showAllTools ? (
                    <div className={styles.banner__list}>
                        <Skills skills={ALL_SKILLS} />
                    </div>
                ) : (
                    <Marquee speed={50}>
                        <Skills skills={ALL_SKILLS} />
                    </Marquee>
                )}
                <Button className={styles.banner__btn} onClick={toggle}>
                    Show {showAllTools ? 'Less' : 'More'}
                </Button>
            </BodyContainer>
        </div>
    );
};

export default BannerSkills;
