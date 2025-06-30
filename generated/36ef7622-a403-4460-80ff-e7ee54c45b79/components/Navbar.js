import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-brief-blue">Brief2Blok</Link>
        <div className="space-x-4">
          <Link href="/about" className="hover:text-brief-blue">About</Link>
          <a href="#" className="bg-brief-blue text-white py-2 px-4 rounded hover:bg-blue-600">Get Started</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar