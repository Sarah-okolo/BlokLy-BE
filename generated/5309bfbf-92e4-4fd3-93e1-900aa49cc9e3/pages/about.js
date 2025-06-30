import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Brief2Blok - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          About Brief2Blok
        </h1>

        <p className="mt-3 text-xl">
          We are a team dedicated to making content creation easier and more efficient.
        </p>

        <p className="mt-3 text-lg">
          Our mission is to empower creators with tools that streamline their workflow and unlock their creative potential.
        </p>

        <Link href="/">
          <a className="mt-6 text-blue-600">Back to Home</a>
        </Link>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://storyblok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Storyblok
        </a>
      </footer>
    </div>
  )
}