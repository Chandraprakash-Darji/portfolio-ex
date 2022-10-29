import { Head, Html, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html>
      <Head>
        <link rel="icon" href="/favicon.ico" />

        <meta
          name="description"
          content="I am Chandraprakash Darji. Frontend developer Based in India. Like Play with Css. Tech Stack are Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss, Scss."
        />

        <meta name="author" content="Chandraprakash Darji" />

        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://chandraprakash.vercel.app/" />
        <meta property="og:title" content="Portfolio - Chandraprakash Darji" />
        <meta
          property="og:description"
          content="I am Chandraprakash Darji. Frontend developer Based in India. Like Play with Css. Tech Stack are Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss, Scss."
        />
        <meta property="og:image" content="/HomePreview.png" />

        {/* Twitter  */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://chandraprakash.vercel.app/"
        />
        <meta
          property="twitter:title"
          content="Portfolio - Chandraprakash Darji"
        />
        <meta
          property="twitter:description"
          content="I am Chandraprakash Darji. Frontend developer Based in India. Like Play with Css. Tech Stack are Html, CSS, JS, TS, React, NEXT.JS, Tailwindcss, Scss."
        />
        <meta property="twitter:image" content="/HomePreview.png" />

        <meta name="theme-color" content="#111119" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@1,700&family=Roboto+Mono&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <Script
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                page_path: window.location.pathname,
              });
          `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
