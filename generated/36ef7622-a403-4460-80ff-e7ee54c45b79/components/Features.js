const Features = () => {
  return (
    <div className="bg-brief-gray py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-center mb-8">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Easy Integration</h3>
            <p className="text-gray-700">Seamlessly connect with your Storyblok account.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Automated Content Creation</h3>
            <p className="text-gray-700">Automatically generate content blocks from your brief.</p>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold mb-2">Customizable Templates</h3>
            <p className="text-gray-700">Customize templates to match your brand style.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features