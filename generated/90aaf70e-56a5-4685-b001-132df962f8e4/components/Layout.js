import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      <Head>
        <title>Brief2Blok</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <nav className="container mx-auto py-4 px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">Brief2Blok</Link>
            <div className="space-x-4">
              <Link href="/features" className="hover:text-blue-500">Features</Link>
              <Link href="/about" className="hover:text-blue-500">About</Link>
            </div>
          </div>
        </nav>
      </header>

      <main className="container mx-auto py-8 px-6 flex-grow">
        {children}
      </main>

      <footer className="bg-gray-100 border-t py-4">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Brief2Blok. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;