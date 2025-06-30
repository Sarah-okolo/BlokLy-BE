import Head from 'next/head';
import Link from 'next/link';

export default function Features() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Brief2Blok - Features</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Brief2Blok <span className="text-blue-600">Features</span>
        </h1>

        <p className="mt-3 text-2xl">
          Explore the powerful features that make Brief2Blok the perfect solution for your content needs.
        </p>

        <ul className="mt-8 text-left">
          <li className="mt-4">
            <h2 className="text-3xl font-semibold">Brief Import & Conversion</h2>
            <p className="text-xl">Effortlessly import your creative briefs in various formats and convert them into Storyblok-compatible content.</p>
          </li>
          <li className="mt-4">
            <h2 className="text-3xl font-semibold">Collaborative Editing</h2>
            <p className="text-xl">Real-time collaboration tools allow your team to work together seamlessly on content creation.</p>
          </li>
          <li className="mt-4">
            <h2 className="text-3xl font-semibold">Visual Editor Integration</h2>
            <p className="text-xl">Directly integrate with Storyblok's visual editor for a smooth content creation workflow.</p>
          </li>
        </ul>

        <Link href="/">
            <a className="mt-8 text-blue-600">&larr; Back to Home</a>
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
  );
}