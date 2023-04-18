import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <link rel="manifest" href="/manifest.json"/> */}
        <meta name="theme-color" content="var(--colorHeaderBg)" />
        <meta name="apple-mobile-web-app-status-bar" content="var(--colorHeaderBg)" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
