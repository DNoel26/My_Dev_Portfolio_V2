/** @format */

import ColorThemeDrawer from '@@components/ColorThemeDrawer';
import ColorThemeToast from '@@components/ColorThemeToast';
import { ANCHOR_TAG } from '@@lib/constants';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import Footer from './Footer';
import Header from './Header';
import ScrollTopButton from './ScrollTopButton';
import SpeedDial from './SpeedDial';

const Layout = ({ children }: TDefaultPropsWithChildren) => {
    return (
        <>
            <span id={ANCHOR_TAG.APP.SCROLL_TOP} />
            <Header />
            <main>{children}</main>
            <SpeedDial />
            <ScrollTopButton />
            <ColorThemeDrawer />
            <ColorThemeToast />
            <Footer />
        </>
    );
};

export default Layout;
