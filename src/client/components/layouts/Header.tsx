/** @format */

import { logoDarnell } from '@@assets/images';
import { MuiAppBar, MuiToolbar } from '@@client';
import ColorThemeToggle from '@@components/ColorThemeToggle';
import BackgroundGradient from '@@components/ui/BackgroundGradient';
import Image from '@@components/ui/Image';
import Link from '@@components/ui/Link';
import ThemeToggle from '@@components/ui/ThemeToggle';
import useScrollTrigger from '@@hooks/useScrollTrigger';
import { ANCHOR_TAG, APP_URL, TRouteHash, TRoutePathname } from '@@lib/constants';
import clsx from 'clsx';
import { MutableRefObject, useEffect, useRef } from 'react';
import BodyContainer from './BodyContainer';
import styles from './Header.module.scss';

interface INavLinkProps {
    title: string;
    pathname?: TRoutePathname;
    hash?: TRouteHash;
    tabIndex?: number;
}
interface IHeaderProps {
    position: 'fixed' | 'absolute';
}

const { HOME, PLAY } = APP_URL.BASE;
const { SERVICES, SKILLS, ABOUT, PROJECTS } = ANCHOR_TAG.HOME_PAGE;
const { CONTACT } = ANCHOR_TAG.APP;

const navLinks: INavLinkProps[] = [
    { title: 'Home', pathname: HOME },
    { title: 'About', pathname: HOME, hash: ABOUT },
    { title: 'Services', pathname: HOME, hash: SERVICES },
    { title: 'Skills', pathname: HOME, hash: SKILLS },
    { title: 'Projects', pathname: HOME, hash: PROJECTS },
    { title: 'Contact', hash: CONTACT },
    { title: 'Play', pathname: PLAY },
];

const NavLink = ({ title, pathname, hash, tabIndex }: INavLinkProps) => {
    return (
        <li>
            <Link href={{ pathname, hash }} tabIndex={tabIndex}>
                {title}
            </Link>
        </li>
    );
};

const HeaderPrivate = ({ position }: IHeaderProps) => {
    const trigger = useScrollTrigger();
    const headerRef = useRef() as MutableRefObject<HTMLDivElement | HTMLElement>;
    const isFixed = position === 'fixed';
    useEffect(() => {
        if (headerRef.current && !isFixed) {
            const headerLinks = headerRef.current.querySelectorAll('a');
            const headerBtns = headerRef.current.querySelectorAll('button');
            /* eslint-disable no-param-reassign */
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
                    <Link className={styles.header__logo} href={HOME}>
                        <Image src={logoDarnell} alt='My signature logo' />
                    </Link>
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
                            {navLinks.map((navLink) => {
                                const { title, pathname, hash } = navLink;
                                return (
                                    <NavLink
                                        key={title}
                                        title={title}
                                        pathname={pathname}
                                        hash={hash}
                                        // tabIndex={!isFixed ? -1 : undefined}
                                    />
                                );
                            })}
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
