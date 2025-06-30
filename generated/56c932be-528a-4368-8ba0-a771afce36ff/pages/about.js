import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-50">
      <Head>
        <title>Brief2Blok - About Us</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          About <span className="text-blue-600">Brief2Blok</span>
        </h1>

        <p className="mt-3 text-2xl">
          We are a team of passionate developers and content creators dedicated to making the content creation process easier and more efficient.
        </p>

        <div className="mt-8">
          <h2 className="text-3xl font-semibold">Our Mission</h2>
          <p className="text-xl mt-4">
            To empower creative teams to seamlessly transform their ideas into engaging Storyblok content.
          </p>
        </div>

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