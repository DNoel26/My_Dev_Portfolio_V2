/** @format */

import { MuiAppBar, MuiDrawer, MuiIconButton, MuiToolbar } from '@@client';
import ColorThemeToggle from '@@components/ColorThemeToggle';
import { MuiMenuIcon } from '@@components/icons';
import BackgroundGradient from '@@components/ui/BackgroundGradient';
import Logo from '@@components/ui/Logo';
import ThemeToggle from '@@components/ui/ThemeToggle';
import useScrollTrigger from '@@hooks/useScrollTrigger';
import { closeDrawer, toggleDrawer } from '@@lib/utils/client/handlers';
import clsx from 'clsx';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import BodyContainer from './BodyContainer';
import styles from './Header.module.scss';
import NavLinks from './NavLinks';

interface IHeaderProps {
    position: 'fixed' | 'absolute';
}

const HeaderPrivate = ({ position }: IHeaderProps) => {
    const [isOpenMobileDrawer, setIsOpenMobileDrawer] = useState(false);
    const trigger = useScrollTrigger();
    const headerRef = useRef() as MutableRefObject<HTMLDivElement | HTMLElement>;
    const isInteractiveHeader = position === 'fixed';
    useEffect(() => {
        if (headerRef.current && !isInteractiveHeader) {
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
    }, [isInteractiveHeader]);

    const handleToggle = toggleDrawer(setIsOpenMobileDrawer);
    const handleClose = closeDrawer(setIsOpenMobileDrawer);

    return (
        <MuiAppBar
            className={clsx(
                styles.header,
                styles[`header--${position}`],
                trigger && styles['header--scrolled'],
            )}
            component={isInteractiveHeader ? 'header' : 'div'}
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
                        <MuiIconButton
                            className={styles.header__menu}
                            onClick={handleToggle}
                        >
                            <MuiMenuIcon />
                            {isInteractiveHeader && (
                                <MuiDrawer
                                    className={styles.header__drawer}
                                    anchor='left'
                                    open={isOpenMobileDrawer}
                                    onClose={handleClose}
                                >
                                    <NavLinks />
                                </MuiDrawer>
                            )}
                        </MuiIconButton>
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
