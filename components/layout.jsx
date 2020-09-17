import Head from 'next/head'
import Header from 'components/Header'

function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Chanh Nguyen</title>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@900&family=Roboto&display=swap" rel="stylesheet"/>
      </Head>

      {/* <Header></Header> */}

      <main>{children}</main>
    </>
  )
}

export default Layout
