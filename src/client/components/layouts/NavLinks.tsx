/** @format */

import { ANCHOR_TAG, APP_URL } from '@@lib/constants';
import { ComponentProps } from 'react';
import NavLink from './NavLink';

const { HOME } = APP_URL.BASE;
const { SERVICES, SKILLS, ABOUT, PROJECTS } = ANCHOR_TAG.HOME_PAGE;
const { CONTACT } = ANCHOR_TAG.APP;

const navLinks: ComponentProps<typeof NavLink>[] = [
    { title: 'Home', pathname: HOME },
    { title: 'About', pathname: HOME, hash: ABOUT },
    { title: 'Services', pathname: HOME, hash: SERVICES },
    { title: 'Skills', pathname: HOME, hash: SKILLS },
    { title: 'Projects', pathname: HOME, hash: PROJECTS },
    { title: 'Contact', hash: CONTACT },
];

const NavLinks = () => {
    return navLinks.map((navLink) => {
        const { title, pathname, hash } = navLink;
        return <NavLink key={title} title={title} pathname={pathname} hash={hash} />;
    });
};

export default NavLinks;
