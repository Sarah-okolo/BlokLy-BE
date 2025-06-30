import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Transform your briefs into Storyblok content</h1>
        <p className="text-lg mb-8">Quickly and easily create stunning content for Storyblok from your creative briefs.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Get Started
        </button>
      </div>
    </Layout>
  );
};

export default Home;