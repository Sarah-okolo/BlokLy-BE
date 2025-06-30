import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brief2Blok</title>
        <meta name="description" content="Quickly transform briefs into Storyblok content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Brief2Blok
        </h1>
        <p className="text-lg mb-8">
          Quickly and easily transform your creative briefs into stunning Storyblok content.
        </p>
        <div className="flex space-x-4">
          <Link href="/brief-form">
            <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Create New Brief
            </a>
          </Link>
          <Link href="/about">
            <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Learn More
            </a>
          </Link>
        </div>
      </main>

      <footer className="bg-white text-center py-4">
        Powered by Brief2Blok
      </footer>
    </div>
  )
}