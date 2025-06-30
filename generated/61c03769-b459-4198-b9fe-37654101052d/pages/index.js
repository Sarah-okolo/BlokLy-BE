```javascript
import Head from 'next/head';
import Link from 'next/link';
import { BriefInfo } from '../components/BriefInfo';

export default function Home() {
  const briefData = {
    "name": "Brief-2-Blok",
    "id": 342716,
    "region": "eu-central-1",
    "created_at": "2025-06-13T22:20:50.469Z",
    "plan": "starter_2025",
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Brief2Blok</title>
        <meta name="description" content="Effortlessly transform your creative briefs into stunning Storyblok content." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-bold text-gray-800">Brief2Blok</h1>
          <p className="text-gray-600">Effortlessly transform briefs into Storyblok content.</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 flex-grow">
        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Welcome!</h2>
          <p className="text-gray-700">Brief2Blok helps you streamline your content creation process.  Get started by exploring the following options:</p>
          <div className="mt-4">
            <Link href="/about" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Learn More</Link>
            <Link href="/brief" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">View Brief Details</Link>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Brief Information</h2>
          <BriefInfo brief={briefData} />
        </section>
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
