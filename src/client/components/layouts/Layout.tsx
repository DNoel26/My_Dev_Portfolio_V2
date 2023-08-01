/** @format */

import { ANCHOR_TAG } from '@@lib/constants/routes/urls';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import Footer from './Footer';
import Header from './Header';
import ScrollTopButton from './ScrollTopButton';

const Layout = ({ children }: TDefaultPropsWithChildren) => {
    return (
        <>
            <span id={ANCHOR_TAG.APP.SCROLL_TOP} />
            <Header />
            <main>{children}</main>
            <ScrollTopButton />
            <Footer />
        </>
    );
};

export default Layout;
