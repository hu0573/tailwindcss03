function SiteBanner() {
  return (
    <main className="mt-20 mx-auto max-w-7xl px-8">
      <div>
        <h1 className="text-6xl font-extrabold tracking-tight">
          <span className="text-green-700 pr-4">Premium Properties</span>
          <span className="text-green-500">Non-premium Prices</span>
        </h1>
        <p className="text-gray-500 mt-5 text-xl">
          At prime properties, we ensure that our clients get the best
          properties at affordable prices. Luxury is our priority and budget is
          our constraint. Pick and choose from 1000+ properties across the
          globe.
        </p>
        <div className="flex mt-5">
          <div className="m-2">
            <a href="#" className="bg-green-500 px-8 py-3 rounded-md">
              View Properties
            </a>
          </div>
          <div className="m-2">
            <a
              href="#"
              className="bg-green-300 text-green-700 px-8 py-3 rounded-md"
            >
              Explore Locations
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

export default SiteBanner;
