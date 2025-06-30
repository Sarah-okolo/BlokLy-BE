import Head from 'next/head';
import Link from 'next/link';

function Home() {
  return (
    <div>
      <Head>
        <title>Brief2Blok</title>
        <meta name="description" content="Effortlessly transform creative briefs into Storyblok content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">Welcome to Brief2Blok</h1>
        <p className="text-lg mb-8 text-center">
          Transform your creative briefs into stunning Storyblok content, fast and efficiently.
        </p>

        <div className="flex justify-center">
          <Link href="/brief-details">
            <a className="bg-primary hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              View Brief Details
            </a>
          </Link>
        </div>
      </main>

      <footer className="bg-gray-100 py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Brief2Blok. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Home;