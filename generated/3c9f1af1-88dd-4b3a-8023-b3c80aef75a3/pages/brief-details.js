import Head from 'next/head';
import Link from 'next/link';

const BriefDetails = () => {
  const briefData = {
    "name": "Brief-2-Blok",
    "id": 342716,
    "region": "eu-central-1",
    "created_at": "2025-06-13T22:20:50.469Z",
    "plan": "starter_2025",
  };

  return (
    <div>
      <Head>
        <title>Brief Details - Brief2Blok</title>
        <meta name="description" content="Details about your creative brief." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold mb-4">Brief Details</h1>

        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <p>{briefData.name}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
            <p>{briefData.id}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Region:</label>
            <p>{briefData.region}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Created At:</label>
            <p>{briefData.created_at}</p>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Plan:</label>
            <p>{briefData.plan}</p>
          </div>
        </div>

        <Link href="/">
          <a className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Back to Home
          </a>
        </Link>
      </main>
    </div>
  );
};

export default BriefDetails;