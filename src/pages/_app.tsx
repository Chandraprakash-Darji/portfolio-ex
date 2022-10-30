import { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import Cursor from '../components/pages/Home/Cursor';
import '../styles/globals.css';
import * as gtag from './../lib/helper/gtag';

function MyApp({ Component, pageProps }: AppProps): ReactNode {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL): void => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
      <Cursor />
    </>
  );
}

export default MyApp;
