/** @format */

import { MuiAppBar, MuiToolbar } from '@@client';
import ColorThemeToggle from '@@components/ColorThemeToggle';
import BackgroundGradient from '@@components/ui/BackgroundGradient';
import Logo from '@@components/ui/Logo';
import ThemeToggle from '@@components/ui/ThemeToggle';
import useScrollTrigger from '@@hooks/useScrollTrigger';
import clsx from 'clsx';
import { MutableRefObject, useEffect, useRef } from 'react';
import BodyContainer from './BodyContainer';
import styles from './Header.module.scss';
import NavLinks from './NavLinks';

interface IHeaderProps {
    position: 'fixed' | 'absolute';
}

const HeaderPrivate = ({ position }: IHeaderProps) => {
    const trigger = useScrollTrigger();
    const headerRef = useRef() as MutableRefObject<HTMLDivElement | HTMLElement>;
    const isFixed = position === 'fixed';
    useEffect(() => {
        if (headerRef.current && !isFixed) {
            const headerLinks = headerRef.current.querySelectorAll('a');
            const headerBtns = headerRef.current.querySelectorAll('button');
            /* eslint-disable no-param-reassign */
            // remove the absolute header from the tab list
            headerLinks.forEach((link) => {
                link.tabIndex = -1;
            });
            headerBtns.forEach((btn) => {
                btn.tabIndex = -1;
            });
            /* eslint-enable no-param-reassign */
        }
    }, [isFixed]);

    return (
        <MuiAppBar
            className={clsx(
                styles.header,
                styles[`header--${position}`],
                trigger && styles['header--scrolled'],
            )}
            component={isFixed ? 'header' : 'div'}
            ref={headerRef}
        >
            <BodyContainer>
                <MuiToolbar className={styles.header__toolbar} disableGutters>
                    <Logo className={styles.header__logo} />
                    <MuiToolbar component='nav' className={styles.header__content}>
                        <BackgroundGradient
                            className={styles.header__content_bg}
                            withBgOnly
                        />
                        <MuiToolbar
                            className={styles.header__links}
                            component='ul'
                            disableGutters
                        >
                            <NavLinks />
                        </MuiToolbar>
                        <MuiToolbar
                            className={styles.header__btns}
                            component='ul'
                            disableGutters
                        >
                            <li>
                                <ColorThemeToggle />
                            </li>
                            <li>
                                <ThemeToggle />
                            </li>
                        </MuiToolbar>
                    </MuiToolbar>
                </MuiToolbar>
            </BodyContainer>
        </MuiAppBar>
    );
};

const Header = () => {
    return (
        <>
            {/* This header is the actual one being used to handle events */}
            <HeaderPrivate position='fixed' />
            {/* This header is just for visual purposes and is disabled */}
            <HeaderPrivate position='absolute' />
        </>
    );
};

export default Header;
