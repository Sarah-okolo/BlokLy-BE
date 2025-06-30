import Head from 'next/head';
import Link from 'next/link';

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Brief2Blok - Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Brief2Blok - Features
        </h1>

        <p className="mt-3 text-2xl">
          Explore the powerful features that streamline your workflow.
        </p>

        <div className="mt-10">
          <ul className="list-disc list-inside text-left">
            <li>Fast Brief Transformation</li>
            <li>Collaborative Editing</li>
            <li>Seamless Storyblok Integration</li>
            <li>User-Friendly Interface</li>
          </ul>
        </div>

        <Link href="/">
          <a className="mt-8 text-blue-600 hover:underline">Back to Home</a>
        </Link>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://www.storyblok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Storyblok
        </a>
      </footer>
    </div>
  )
}