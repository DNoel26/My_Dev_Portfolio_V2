/** @format */

import { ClickAwayListener } from '@mui/material';
import clsx from 'clsx';
import { ComponentProps, useState } from 'react';
import styles from './ProjectCard.module.scss';
import Button from './ui/Button';
import Image from './ui/Image';
import Link from './ui/Link';
import WrapperIcon from './ui/WrapperIcon';

type TImage = ComponentProps<typeof Image>;
type TImageProps = {
    src: TImage['src'];
    alt: TImage['alt'];
};
type TProps = TImageProps & {
    heading: string;
    href: string;
    tools: TImageProps[];
};

const ProjectCard = ({ src, alt, heading, href, tools }: TProps) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <ClickAwayListener onClickAway={() => setIsExpanded(false)}>
            <div className={clsx(styles.card, isExpanded && styles['card--expanded'])}>
                <div className={styles.card__logo}>
                    <Image src={src} alt={alt} />
                </div>
                <div className={styles.card__details}>
                    <div>
                        <h4>{heading}</h4>
                        <Link isExternal href={href}>
                            Visit Website
                        </Link>
                        <div className={styles.card__btn}>
                            <Button
                                customVariant='text'
                                onClick={() => {
                                    setIsExpanded((prev) => !prev);
                                }}
                            >
                                Show {isExpanded ? 'less' : 'more'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    className={clsx(
                        styles.card__more_details,
                        isExpanded && styles['card__more_details--show'],
                    )}
                >
                    <strong>Built using:</strong>
                    <div className={styles.card__logos}>
                        {tools.map((tool) => {
                            const { src: toolSrc, alt: toolAlt } = tool;
                            return (
                                <WrapperIcon
                                    key={String(toolSrc)}
                                    alt={toolAlt}
                                    src={toolSrc}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    );
};

export default ProjectCard;
