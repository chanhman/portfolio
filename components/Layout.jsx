import Head from 'next/head';
import { NextSeo } from 'next-seo';
import Header from 'components/Header';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;900&family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NextSeo
        title="Chanh Nguyen / Designer and Front-end Developer"
        description="Chanh Nguyen is a designer and front-end developer in Salt Lake City."
        openGraph={{
          url: 'https://chanh.design',
          description:
            'Chanh Nguyen is a designer and front-end developer in Salt Lake City.',
          images: [{ url: 'https://chanh.design/og.png' }],
          type: 'website',
        }}
      />

      <Header></Header>

      <main>{children}</main>
    </>
  );
};

export default Layout;
