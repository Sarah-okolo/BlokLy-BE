import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>About Brief2Blok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          About Brief2Blok
        </h1>

        <p className="mt-3 text-xl">
          Brief2Blok is a tool designed to streamline the process of converting creative briefs into Storyblok content.
        </p>

        <p className="mt-3 text-xl">
          It helps you quickly structure your ideas and turn them into beautiful, manageable Storyblok components.
        </p>

        <Link href="/">
          <a className="mt-6 text-blue-600">Back to Home</a>
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