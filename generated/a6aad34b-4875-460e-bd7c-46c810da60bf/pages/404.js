import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Sorry, the page you are looking for could not be found.
        </p>
        <Link href="/">
          <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Go back home
          </a>
        </Link>
      </main>
    </div>
  )
}