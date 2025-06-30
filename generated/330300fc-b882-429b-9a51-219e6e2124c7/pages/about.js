```javascript
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-brief2blok-light min-h-screen">
      <Head>
        <title>About - Brief2Blok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-brief2blok-dark sm:text-3xl sm:truncate">
                About Us
              </h2>
            </div>
            <div className="mt-5 flex lg:mt-0 lg:ml-4">
              <Link href="/" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-brief2blok-primary hover:bg-brief2blok-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="rounded-lg h-96 bg-white p-4">
              <h3 className="text-lg font-semibold text-brief2blok-dark">Our Mission:</h3>
              <p>
                To empower creatives by simplifying the process of transforming briefs into effective Storyblok content.
              </p>
              <h3 className="text-lg font-semibold text-brief2blok-dark mt-4">Our Team:</h3>
              <p>
                A group of passionate developers and content strategists.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
```
