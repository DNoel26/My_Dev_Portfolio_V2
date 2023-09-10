/** @format */

import { ClickAwayListener } from '@mui/material';
import clsx from 'clsx';
import { ComponentProps, useState } from 'react';
import styles from './ProjectCard.module.scss';
import { MuiExpandLessIcon, MuiExpandMoreIcon, MuiOpenInNewIcon } from './icons';
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
    details: string;
    tools: TImageProps[];
};

const ProjectCard = ({ src, alt, heading, href, details, tools }: TProps) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [height, setHeight] = useState(0);

    return (
        <ClickAwayListener onClickAway={() => setIsExpanded(false)}>
            <div className={clsx(styles.card, isExpanded && styles['card--expanded'])}>
                <div className={styles.card__logo}>
                    <Image src={src} alt={alt} />
                </div>
                <div className={styles.card__details}>
                    <div>
                        <h3>{heading}</h3>
                        <Link isExternal href={href}>
                            <MuiOpenInNewIcon fontSize='small' />
                            <span>Visit Website</span>
                        </Link>
                        <div className={styles.card__btn}>
                            <Button
                                customVariant='text'
                                onClick={() => {
                                    setIsExpanded((prev) => !prev);
                                }}
                                startIcon={
                                    isExpanded ? (
                                        <MuiExpandLessIcon fontSize='small' />
                                    ) : (
                                        <MuiExpandMoreIcon fontSize='small' />
                                    )
                                }
                            >
                                Show {isExpanded ? 'less' : 'more'}
                            </Button>
                        </div>
                    </div>
                </div>
                <div
                    className={styles.card__more_details_wrapper}
                    style={{ height: isExpanded ? height : 0 }}
                >
                    <div
                        className={clsx(styles.card__more_details)}
                        ref={(node) => {
                            if (node) {
                                setHeight(node.offsetHeight);
                            }
                        }}
                    >
                        <p>{details}</p>
                        <strong>Built using:</strong>
                        <div className={styles.card__logos}>
                            {tools.map((tool, index) => {
                                const { src: toolSrc, alt: toolAlt } = tool;
                                return (
                                    <WrapperIcon
                                        // eslint-disable-next-line react/no-array-index-key
                                        key={index}
                                        alt={toolAlt}
                                        src={toolSrc}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ClickAwayListener>
    );
};

export default ProjectCard;
