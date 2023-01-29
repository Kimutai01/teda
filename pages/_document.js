import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Contrail+One&family=Raleway:ital,wght@0,100;0,200;0,300;0,400;0,500;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script>

        <link
          href="https://unpkg.com/swiper/swiper-bundle.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
