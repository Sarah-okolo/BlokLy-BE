import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Brief2Blok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Welcome to Brief2Blok
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Effortlessly transform your creative briefs into stunning Storyblok content.
        </p>
        <div className="flex space-x-4">
            <Link href="/features">
                <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Explore Features
                </a>
            </Link>
            <Link href="/about">
                <a className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Learn More
                </a>
            </Link>
        </div>

        <footer className="mt-12">
            <p className="text-gray-500">Powered by Next.js and Storyblok</p>
        </footer>
      </main>
    </div>
  );
}