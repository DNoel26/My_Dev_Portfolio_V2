/** @format */

import { logoDarnell } from '@@assets/images';
import { MuiAppBar, MuiIconButton, MuiToolbar } from '@@client';
import { MuiIconSettings } from '@@components/icons';
import BackgroundGradient from '@@components/ui/BackgroundGradient';
import Image from '@@components/ui/Image';
import Link from '@@components/ui/Link';
import ThemeToggle from '@@components/ui/ThemeToggle';
import useScrollTrigger from '@@hooks/useScrollTrigger';
import { ANCHOR_TAG, APP_URL, TRouteHash, TRoutePathname } from '@@lib/constants';
import clsx from 'clsx';
import BodyContainer from './BodyContainer';
import styles from './Header.module.scss';

interface INavLinkProps {
    title: string;
    pathname?: TRoutePathname;
    hash?: TRouteHash;
}
interface IHeaderProps {
    position: 'fixed' | 'absolute';
}

const { HOME, ABOUT, PROJECTS, PLAY } = APP_URL.BASE;
const { SERVICES, SKILLS } = ANCHOR_TAG.HOME_PAGE;
const { CONTACT } = ANCHOR_TAG.APP;

const navLinks: INavLinkProps[] = [
    { title: 'Home', pathname: HOME },
    { title: 'About', pathname: ABOUT },
    { title: 'Services', pathname: HOME, hash: SERVICES },
    { title: 'Skills', pathname: HOME, hash: SKILLS },
    { title: 'Projects', pathname: PROJECTS },
    { title: 'Contact', hash: CONTACT },
    { title: 'Play', pathname: PLAY },
];

const NavLink = ({ title, pathname, hash }: INavLinkProps) => {
    return (
        <li>
            <Link href={{ pathname, hash }}>{title}</Link>
        </li>
    );
};

const HeaderPrivate = ({ position }: IHeaderProps) => {
    const trigger = useScrollTrigger();

    return (
        <MuiAppBar
            className={clsx(
                styles.header,
                styles[`header--${position}`],
                trigger && styles['header--scrolled'],
            )}
            component={position === 'fixed' ? 'header' : 'div'}
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
                                <MuiIconButton aria-label='settings'>
                                    <MuiIconSettings />
                                </MuiIconButton>
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
            {/* Allows modification to separate headers on scroll */}
            <HeaderPrivate position='fixed' />
            <HeaderPrivate position='absolute' />
        </>
    );
};

export default Header;
