import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600&family=Poppins:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="prose-headings:font-headings">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
