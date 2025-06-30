```javascript
import Head from 'next/head';
import Link from 'next/link';

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>About - Brief2Blok</title>
        <meta name="description" content="Learn more about Brief2Blok" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">About Brief2Blok</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8">
          <p className="text-gray-700">Brief2Blok is designed to make content creation easier and more efficient. We help you transform creative briefs into stunning Storyblok content with ease.</p>
          <p className="text-gray-700 mt-4">Our platform provides a seamless collaboration experience, allowing teams to work together effectively.</p>
        </section>
        <Link href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Back to Home</Link>
      </main>

      <footer className="bg-gray-200 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">© 2025 Brief2Blok</p>
        </div>
      </footer>
    </div>
  );
}
```
