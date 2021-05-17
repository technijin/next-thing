import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jinunit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img href="/jinunit.png"/>
        <Header title="Jinunit" />
        <p className="description">
          This is exciting, can you imagine what is coming up? 
        </p>
      </main>

    </div>
  )
}
