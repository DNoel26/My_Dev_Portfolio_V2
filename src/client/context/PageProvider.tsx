/** @format */

import Layout from '@@components/layouts/Layout';
import MuiThemeProvider from '@@context/MuiThemeProvider';
import useNextTheme from '@@hooks/useNextTheme';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { configSEO } from 'src/client/config/nextSeo.config';
import UserThemeProvider from './UserThemeContext';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
const PageProvider = ({ children }: TDefaultPropsWithChildren) => {
    const { isThemeResolved } = useNextTheme();

    if (!isThemeResolved) {
        return null;
    }

    const chatPosition = `{ bottom: 150px !important; right: -10px !important; }`;
    const chatWidgetStyle = `#tidio-chat-iframe ${chatPosition}
                            @media (max-width: 980px) {
                            #tidio-chat-iframe ${chatPosition}`;

    return (
        <StyledEngineProvider injectFirst>
            <UserThemeProvider>
                <MuiThemeProvider>
                    <Layout>
                        <Head>
                            <meta charSet='UTF-8' />
                            <meta
                                name='viewport'
                                content='initial-scale=1, width=device-width'
                            />
                            <meta name='description' content='Web Developer Portfolio' />
                            <link rel='icon' href='/favicon.ico' />
                            <title>Darnell Noel | Web Developer</title>
                            <style>{chatWidgetStyle}</style>
                        </Head>
                        <CssBaseline enableColorScheme />
                        <DefaultSeo {...configSEO} />
                        {children}
                    </Layout>
                </MuiThemeProvider>
            </UserThemeProvider>
        </StyledEngineProvider>
    );
};

export default PageProvider;
