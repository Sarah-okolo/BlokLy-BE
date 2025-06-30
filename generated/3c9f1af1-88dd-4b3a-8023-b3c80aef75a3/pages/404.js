import Head from 'next/head';
import Link from 'next/link';

function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
        <meta name="description" content="Page not found." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="text-lg mb-8">
          Oops! The page you are looking for could not be found.
        </p>

        <Link href="/">
          <a className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Go back home
          </a>
        </Link>
      </main>
    </div>
  );
}

export default Custom404;