/** @format */

import { CSS_ID } from '@@lib/constants';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import Footer from './Footer';
import Header from './Header';
import ScrollTopButton from './ScrollTopButton';

const Layout = ({ children }: TDefaultPropsWithChildren) => (
    <>
        <span id={CSS_ID.SCROLL_TOP_ANCHOR} />
        <Header />
        <main>{children}</main>
        <ScrollTopButton />
        <Footer />
    </>
);

export default Layout;
