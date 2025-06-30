import Head from 'next/head'
import Link from 'next/link'

export default function BriefForm() {
  return (
    <div>
      <Head>
        <title>Brief Form - Brief2Blok</title>
        <meta name="description" content="Create a new brief for Storyblok." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 min-h-screen flex flex-col items-center py-2">
        <h1 className="text-4xl font-bold mt-8 mb-4">
          Create a New Brief
        </h1>
        <p className="text-lg mb-8">
          Fill out the form below to generate Storyblok content.
        </p>

        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Title
            </label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Brief Title" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
              Description
            </label>
            <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" placeholder="Brief Description" />
          </div>
          <div className="flex items-center justify-between">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Generate Content
            </button>
            <Link href="/">
              <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                Back to Home
              </a>
            </Link>
          </div>
        </form>
      </main>

      <footer className="bg-white text-center py-4">
        Powered by Brief2Blok
      </footer>
    </div>
  )
}