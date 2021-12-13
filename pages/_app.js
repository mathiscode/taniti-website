import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/cerulean/bootstrap.min.css'
import '../styles/globals.css'

import TopNav from '../components/TopNav'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Welcome to Taniti!</title>
        <meta name="description" content="This island getaway is exactly what you need" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <TopNav />
      
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
