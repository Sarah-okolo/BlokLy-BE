import Head from 'next/head';
import Link from 'next/link';

export default function Pricing() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <Head>
        <title>Brief2Blok - Pricing</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Brief2Blok - Pricing
        </h1>

        <p className="mt-3 text-2xl">
          Choose the plan that fits your needs.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <div className="p-6 mt-6 text-left border w-96 rounded-xl">
            <h3 className="text-2xl font-bold">Free</h3>
            <p className="mt-4 text-xl">
              For small projects and individual users.
            </p>
          </div>

          <div className="p-6 mt-6 text-left border w-96 rounded-xl">
            <h3 className="text-2xl font-bold">Pro</h3>
            <p className="mt-4 text-xl">
              For growing teams and larger projects.
            </p>
          </div>
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