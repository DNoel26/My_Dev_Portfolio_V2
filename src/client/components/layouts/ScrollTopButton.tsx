/** @format */

import { MuiBox, MuiFab, MuiZoom } from '@@client';
import { MuiIconKeyboardArrowUpIcon } from '@@components/icons';
import useScrollTrigger from '@@hooks/useScrollTrigger';
import { ANCHOR_TAG } from '@@lib/constants';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import styles from './ScrollTopButton.module.scss';

const ScrollTop = (props: TDefaultPropsWithChildren) => {
    const { children } = props;
    const trigger = useScrollTrigger();

    const handleClick = (event: React.MouseEvent<HTMLDivElement>): void => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector(`#${ANCHOR_TAG.APP.SCROLL_TOP}`);

        if (anchor) {
            anchor.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });
        } else if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0 });
        }
    };

    return (
        <MuiZoom in={trigger}>
            <MuiBox
                onClick={handleClick}
                role='presentation'
                sx={{ position: 'fixed', bottom: 16, right: 16, zIndex: 100 }}
            >
                {children}
            </MuiBox>
        </MuiZoom>
    );
};

const ScrollTopButton = () => {
    return (
        <ScrollTop>
            <MuiFab className={styles.fab} size='small' aria-label='scroll back to top'>
                <MuiIconKeyboardArrowUpIcon />
            </MuiFab>
        </ScrollTop>
    );
};

export default ScrollTopButton;
