import Head from 'next/head'
import Header from 'components/Header'

const GA_TRACKING_ID = 'UA-172462762-1'

function Layout({ children }) {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {/* <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_TRACKING_ID}', {
            page_path: window.location.pathname,
          });
        `,
          }}
        /> */}

        <title>Chanh Nguyen</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>

      <Header></Header>

      <main>{children}</main>
    </>
  )
}

export default Layout
