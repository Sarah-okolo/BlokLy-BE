import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div>
      <Head>
        <title>Brief2Blok - About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          About Brief2Blok
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Brief2Blok is a tool designed to simplify the process of creating content in Storyblok. <br/> We aim to make content creation faster and more collaborative.
        </p>

        <div className="max-w-md bg-white shadow-md rounded-lg p-4">
          <h2 className="text-2xl font-semibold mb-2 text-gray-700">Our Mission</h2>
          <p className="text-gray-500">To empower content creators with efficient and collaborative tools.</p>
        </div>

        <Link href="/">
          <a className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Back to Home
          </a>
        </Link>
      </main>
    </div>
  );
}