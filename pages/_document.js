import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="stylesheet" href="/basic/styles.css"/>
                <link rel="stylesheet" href="/styles.css"/>
                <link rel="stylesheet" href="/themes.css"/>
                <link rel="stylesheet" href="/next.css"/>
                <link rel="stylesheet" href="/nextList.css"/>
            </Head>
            <body>
                <Main/>
                <NextScript />
            </body>
        </Html>
    )
}