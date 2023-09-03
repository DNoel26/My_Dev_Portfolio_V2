/** @format */

import Link from '@@components/ui/Link';
import { TRouteHash, TRoutePathname } from '@@lib/constants';

interface INavLinkProps {
    title: string;
    pathname?: TRoutePathname;
    hash?: TRouteHash;
}

const NavLink = ({ title, pathname, hash }: INavLinkProps) => {
    return (
        <li>
            <Link href={{ pathname, hash }}>{title}</Link>
        </li>
    );
};

export default NavLink;
