import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Brief2Blok - Effortless Storyblok Content</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to <a className="text-blue-600" href="https://www.storyblok.com/">Brief2Blok!</a>
        </h1>

        <p className="mt-3 text-2xl">
          Effortlessly transform your creative briefs into stunning Storyblok content.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link href="/features">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Features &rarr;</h3>
              <p className="mt-4 text-xl">
                Discover the features that make Brief2Blok so powerful.
              </p>
            </a>
          </Link>

          <Link href="/pricing">
            <a
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Pricing &rarr;</h3>
              <p className="mt-4 text-xl">
                See our flexible pricing plans to fit your needs.
              </p>
            </a>
          </Link>
        </div>
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