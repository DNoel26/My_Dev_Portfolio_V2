/** @format */

import { logoDarnell } from '@@assets/images';
import { MuiAppBar, MuiIconButton, MuiToolbar } from '@@client';
import { MuiIconSettings } from '@@components/icons';
import DarkModeToggle from '@@components/ui/DarkModeToggle';
import Image from '@@components/ui/Image';
import Link from '@@components/ui/Link';
import useScrollTrigger from '@@hooks/useScrollTrigger';
import {
    ANCHOR_TAG,
    APP_URL,
    TRouteHash,
    TRoutePathname,
} from '@@lib/constants/routes/urls';
import clsx from 'clsx';
import BodyContainer from './BodyContainer';
import styles from './Header.module.scss';

interface INavLinkProps {
    title: string;
    pathname?: TRoutePathname;
    hash?: TRouteHash;
}

const { HOME, ABOUT, PROJECTS, PLAY } = APP_URL.BASE;
const { SERVICES, SKILLS, HOME: HOME_HASH } = ANCHOR_TAG.HOME_PAGE;
const { CONTACT } = ANCHOR_TAG.APP;

const navLinks: INavLinkProps[] = [
    { title: 'Home', pathname: HOME, hash: HOME_HASH },
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
            <Link href={{ pathname, hash }} scroll={false}>
                {title}
            </Link>
        </li>
    );
};

const Header = () => {
    const trigger = useScrollTrigger();

    return (
        <MuiAppBar className={clsx(styles.header, trigger && styles['header--scrolled'])}>
            <BodyContainer>
                <MuiToolbar className={styles.header__toolbar} disableGutters>
                    <Link className={styles.header__logo} href={HOME}>
                        <Image src={logoDarnell} alt='My signature logo' />
                    </Link>
                    <MuiToolbar component='nav' className={styles.header__content}>
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
                                <DarkModeToggle />
                            </li>
                        </MuiToolbar>
                    </MuiToolbar>
                </MuiToolbar>
            </BodyContainer>
        </MuiAppBar>
    );
};

export default Header;
