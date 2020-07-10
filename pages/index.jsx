import Head from 'next/head'
import Hero from '../components/Hero'
import CaseStudy from '../components/CaseStudy'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chanh Nguyen</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap" rel="stylesheet"/> 
      </Head>
      <Hero/>
      <CaseStudy></CaseStudy>
    </>
  )
}
