import Head from 'next/head'
import Hero from '../components/Hero'
import CaseStudy from '../components/CaseStudy'

export default function Home() {
  return (
    <>
      <Head>
        {/* Global site tag (gtag.js) - Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-172462762-1"></script>
        <script>
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'UA-172462762-1');
            `
          }}
        </script>

        <title>Chanh Nguyen</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap" rel="stylesheet"/> 
      </Head>
      <Hero/>
      <CaseStudy/>
      <CaseStudy/>
    </>
  )
}
