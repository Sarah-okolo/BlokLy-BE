import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div>
      <Head>
        <title>About - Brief2Blok</title>
        <meta name="description" content="About Brief2Blok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold mb-4">
          About Brief2Blok
        </h1>
        <p className="text-lg mb-8 text-center">
          Brief2Blok helps you transform your creative briefs into stunning Storyblok content with ease.
        </p>
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </a>
        </Link>
      </main>

      <footer className="bg-white text-center py-4">
        Powered by Brief2Blok
      </footer>
    </div>
  )
}