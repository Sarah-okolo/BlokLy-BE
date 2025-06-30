import Head from 'next/head'
import Link from 'next/link'

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Brief2Blok - Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Brief2Blok - Features
        </h1>

        <p className="mt-3 text-xl">
          Here's what you can do with Brief2Blok:
        </p>

        <ul className="mt-6 list-disc list-inside">
          <li>Fast Brief Transformation</li>
          <li>Collaborative Workflow</li>
          <li>Seamless Storyblok Integration</li>
        </ul>

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