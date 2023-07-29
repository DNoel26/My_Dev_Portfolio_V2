/** @format */

import useNextTheme from '@@hooks/useNextTheme';
import { DEFAULT_THEME } from '@@theme/dark';
import { TDefaultProps } from '@@types/client/props.types';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { MuiButton, MuiTooltip } from '..';
import { ISkill, SKILLS } from '../data/skills';
import styles from './BannerTools.module.scss';
import BodyContainer from './layouts/BodyContainer';
import WrapperIcon from './ui/WrapperIcon';

type TIconProp = Pick<ISkill, 'ICON_DARK' | 'ICON_LIGHT'>;

const BannerSkills = ({ className }: TDefaultProps) => {
    const { resolvedTheme = DEFAULT_THEME } = useNextTheme();
    const key: keyof TIconProp = `ICON_${
        resolvedTheme.toUpperCase() as Uppercase<'dark' | 'light'>
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
            <BodyContainer className={styles.banner__container}>
                {SKILLS.map((SKILL) => {
                    const { NAME, ICON_LIGHT } = SKILL;
                    const title = `${NAME}: ★☆☆`;
                    return (
                        <MuiTooltip
                            className={styles.banner__icon_tooltip}
                            key={NAME}
                            title={title}
                            followCursor
                        >
                            <MuiButton className={styles.banner__icon_btn}>
                                <WrapperIcon
                                    alt={title}
                                    src={SKILL[iconProp] ?? ICON_LIGHT}
                                />
                                <span className={styles.banner__icon_text}>{NAME}</span>
                            </MuiButton>
                        </MuiTooltip>
                    );
                })}
            </BodyContainer>
        </div>
    );
};

export default BannerSkills;