```javascript
import Head from 'next/head';
import Link from 'next/link';

export default function BriefDetails() {
  const briefData = {
    "name": "Brief-2-Blok",
    "id": 342716,
    "updated_at": "2025-06-29T10:18:25.000Z",
    "plan": "starter_2025",
    "created_at": "2025-06-13T22:20:50.469Z",
  };

  return (
    <div className="bg-brief2blok-light min-h-screen">
      <Head>
        <title>Brief Details - Brief2Blok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="flex-1 min-w-0">
              <h2 className="text-2xl font-bold leading-7 text-brief2blok-dark sm:text-3xl sm:truncate">
                Brief Details
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
              <h3 className="text-lg font-semibold text-brief2blok-dark">Brief Information:</h3>
              <p>Name: {briefData.name}</p>
              <p>ID: {briefData.id}</p>
              <p>Updated At: {briefData.updated_at}</p>
              <p>Plan: {briefData.plan}</p>
              <p>Created At: {briefData.created_at}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
```
