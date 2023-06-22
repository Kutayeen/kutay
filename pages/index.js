import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Erdal Kutay Sesen</title>
        <link rel="icon" href="/images/croped_moi.png" />
      </Head>

      <main>
        <Header title="Kutay" />
        {/*<p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>*/}
      </main>

      <Footer />
    </div>
  )
}
