/** @format */

import Layout from '@@components/layouts/Layout';
import MuiThemeProvider from '@@context/MuiThemeProvider';
import useNextTheme from '@@hooks/useNextTheme';
import { TDefaultPropsWithChildren } from '@@types/client/props.types';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { DefaultSeo } from 'next-seo';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { configSEO } from 'src/client/config/nextSeo.config';

/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-console */
const PageProvider = ({ children }: TDefaultPropsWithChildren) => {
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme } = useNextTheme();
    useEffect(() => {
        if (resolvedTheme) {
            setMounted(true);
        }
    }, [resolvedTheme]);

    if (!mounted) {
        return null;
    }

    const chatPosition = `{ bottom: 75px !important; right: -10px !important; background: red !important; }`;
    const chatWidgetStyle = `#tidio-chat-iframe ${chatPosition}
                            @media only screen and (max-width: 980px) {
                            #tidio-chat-iframe ${chatPosition}`;

    return (
        <StyledEngineProvider injectFirst>
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
        </StyledEngineProvider>
    );
};

export default PageProvider;
