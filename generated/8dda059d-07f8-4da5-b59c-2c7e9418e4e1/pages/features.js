import Head from 'next/head';
import Link from 'next/link';

export default function Features() {
  return (
    <div>
      <Head>
        <title>Brief2Blok - Features</title>
        <meta name="description" content="Brief2Blok Features" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Features
            </h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg bg-white shadow p-8">
              <h2 className="text-2xl font-semibold mb-4">Key Features</h2>
              <ul className="list-disc list-inside text-gray-700">
                <li>Seamless Storyblok Integration</li>
                <li>Fast and Efficient Content Transformation</li>
                <li>Designed for Collaboration</li>
              </ul>
              <Link href="/">
                <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Back to Home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}