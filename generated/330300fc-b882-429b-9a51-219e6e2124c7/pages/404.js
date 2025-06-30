```javascript
import Head from 'next/head';
import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brief2blok-light">
      <Head>
        <title>404 - Brief2Blok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-4xl font-bold text-brief2blok-dark mb-4">404 - Page Not Found</h1>
      <p className="text-lg text-brief2blok-dark">Sorry, the page you are looking for does not exist.</p>
      <Link href="/" className="mt-4 text-brief2blok-primary hover:text-brief2blok-secondary">
        Go back to the homepage
      </Link>
    </div>
  );
}
```
