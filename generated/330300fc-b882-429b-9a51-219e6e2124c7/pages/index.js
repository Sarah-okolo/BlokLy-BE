```javascript
import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-brief2blok-light">
      <Head>
        <title>Brief2Blok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-brief2blok-primary">
          Welcome to <span className="text-brief2blok-secondary">Brief2Blok!</span>
        </h1>

        <p className="mt-3 text-2xl">
          Quickly transform your creative briefs into stunning Storyblok content.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <Link
            href="/brief-details"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-brief2blok-primary focus:text-brief2blok-primary"
          >
            <h3 className="text-2xl font-bold">Brief Details &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn more about your content briefs and how to convert them.
            </p>
          </Link>

          <Link
            href="/about"
            className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-brief2blok-primary focus:text-brief2blok-primary"
          >
            <h3 className="text-2xl font-bold">About Us &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover the team behind Brief2Blok.
            </p>
          </Link>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://storyblok.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Storyblok
        </a>
      </footer>
    </div>
  );
}
```
