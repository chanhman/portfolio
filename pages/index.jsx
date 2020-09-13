import Head from 'next/head'
import Hero from 'components/Hero'
import BuiltForTeams from 'components/BuiltForTeams'
import Experience from 'components/Experience'

const GA_TRACKING_ID = 'UA-172462762-1'

export default function Home() {
  return (
    <>
      <Head>
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
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
        />

        <title>Chanh Nguyen</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap" rel="stylesheet"/> 
      </Head>
      <Hero/>
      <h2>My Work</h2>
      <BuiltForTeams/>
      <Experience/>
    </>
  )
}
