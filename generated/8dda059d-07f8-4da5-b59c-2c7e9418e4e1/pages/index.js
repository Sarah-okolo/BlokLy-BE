import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brief2Blok</title>
        <meta name="description" content="Effortlessly transform your creative briefs into stunning Storyblok content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Brief2Blok
            </h1>
          </div>
        </header>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg h-96 bg-white shadow p-8">
              <h2 className="text-2xl font-semibold mb-4">Welcome to Brief2Blok!</h2>
              <p className="text-gray-700">
                Effortlessly transform your creative briefs into stunning Storyblok content. Fast, efficient, and designed for seamless collaboration.
              </p>
              <Link href="/features">
                <a className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
                  Learn More
                </a>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}