import Head from 'next/head'
import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Features from '../components/Features'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brief2Blok - Transform your briefs into Storyblok content</title>
        <meta name="description" content="Quickly and easily transform your creative briefs into stunning Storyblok content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Hero />
        <Features />
      </Layout>
    </div>
  )
}