import Head from 'next/head';
import Link from 'next/link';

export default function Editor() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Brief2Blok Editor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-4xl font-bold">
          Brief2Blok Editor
        </h1>

        <p className="mt-3 text-xl">
          This is a placeholder for the Brief2Blok editor.
        </p>

        <p className="mt-3 text-xl">
          Imagine a rich text editor with Storyblok component integration here.
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