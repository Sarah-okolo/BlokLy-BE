import Head from 'next/head';
import Link from 'next/link';

export default function Features() {
  return (
    <div>
      <Head>
        <title>Brief2Blok - Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-50 min-h-screen flex flex-col items-center justify-center py-2">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">
          Brief2Blok Features
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Discover the power of Brief2Blok.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Fast Transformation</h2>
            <p className="text-gray-500">Convert briefs to Storyblok content quickly and easily.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Efficient Workflow</h2>
            <p className="text-gray-500">Streamline your content creation process.</p>
          </div>

          <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-2xl font-semibold mb-2 text-gray-700">Collaboration Ready</h2>
            <p className="text-gray-500">Designed for team collaboration on Storyblok projects.</p>
          </div>
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