import Head from 'next/head'
import Layout from '../components/Layout'

export default function About() {
  return (
    <div>
      <Head>
        <title>About Brief2Blok</title>
        <meta name="description" content="Learn more about Brief2Blok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className="container mx-auto py-10">
          <h1 className="text-3xl font-bold mb-4">About Brief2Blok</h1>
          <p className="text-gray-700">
            Brief2Blok helps you streamline your workflow by transforming creative briefs into Storyblok content.
            We aim to make content creation easier and more efficient for everyone.
          </p>
        </div>
      </Layout>
    </div>
  )
}