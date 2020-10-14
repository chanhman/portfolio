import Head from 'next/head'
import Header from 'components/Header'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Chanh Nguyen / Front-end developer and designer</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap" rel="stylesheet"/>
        <meta property="og:title" content="Chanh Nguyen / Front-end developer and designer"></meta>
        <meta itemprop="description" content="Chanh Nguyen is a front-end developer and designer in Salt Lake City."></meta>
        <meta property="og:url" content="https://chanh.design"></meta>
        <meta property="og:image" content="https://chanh.design/og.png"></meta>
        <meta property="og:type" content="website"></meta>
      </Head>

      <Header></Header>

      <main>{children}</main>
    </>
  )
}

export default Layout
