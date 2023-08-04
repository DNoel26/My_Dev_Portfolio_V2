/** @format */

import useNextTheme from '@@hooks/useNextTheme';
import { NEXT_THEME } from '@@lib/constants';
import { DEFAULT_THEME } from '@@theme';
import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { MuiButton, MuiTooltip } from '..';
import { ISkill, OS_SKILLS, SKILLS } from '../data/skills';
import styles from './BannerTools.module.scss';
import BodyContainer from './layouts/BodyContainer';
import WrapperIcon from './ui/WrapperIcon';

type TIconProp = Pick<ISkill, 'ICON_DARK' | 'ICON_LIGHT'>;
type TSkillIcon = {
    name: ISkill['NAME'];
    title: string;
    iconProp: ISkill['ICON_LIGHT'] | ISkill['ICON_DARK'];
    iconLight: ISkill['ICON_LIGHT'];
};

const SkillIcon = ({ name, title, iconProp, iconLight }: TSkillIcon) => {
    return (
        <MuiTooltip
            className={styles.banner__icon_tooltip}
            key={name}
            title={title}
            followCursor
        >
            <MuiButton className={styles.banner__icon_btn}>
                <WrapperIcon alt={title} src={iconProp ?? iconLight} />
                <span className={styles.banner__icon_text}>{name}</span>
            </MuiButton>
        </MuiTooltip>
    );
};

const BannerSkills = ({ className }: TDefaultProps) => {
    const { resolvedTheme = DEFAULT_THEME } = useNextTheme();
    const key: keyof TIconProp = `ICON_${
        resolvedTheme.toUpperCase() as Uppercase<
            typeof NEXT_THEME.LIGHT | typeof NEXT_THEME.DARK
        >
    }`;
    const [iconProp, setIconProp] = useState(key);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIconProp(key);
        }, 501);

        return () => {
            clearTimeout(timer);
        };
    }, [key]);

    return (
        <div className={clsx(styles.banner, className)}>
            <BodyContainer>
                <div className={styles.banner__container}>
                    {SKILLS.map((SKILL) => {
                        const { NAME, ICON_LIGHT } = SKILL;
                        const title = `${NAME}: ★☆☆`;
                        return (
                            <SkillIcon
                                key={NAME}
                                name={NAME}
                                title={title}
                                iconProp={SKILL[iconProp]}
                                iconLight={ICON_LIGHT}
                            />
                        );
                    })}
                </div>
                <div className={styles.banner__container}>
                    {OS_SKILLS.map((SKILL) => {
                        const { NAME, ICON_LIGHT } = SKILL;
                        const title = `${NAME}: ★☆☆`;
                        return (
                            <SkillIcon
                                key={NAME}
                                name={NAME}
                                title={title}
                                iconProp={SKILL[iconProp]}
                                iconLight={ICON_LIGHT}
                            />
                        );
                    })}
                </div>
            </BodyContainer>
        </div>
    );
};

export default BannerSkills;
