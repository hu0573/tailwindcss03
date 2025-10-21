function Banner() {
  return (
    <div className="mt-5 mx-auto max-w-7xl px-8">
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url('/images/banner.jpg')",
        }}
      >
        <div className="text-white mx-10 flex flex-col">
          <h2 className="text-4xl font-bold mb-2">
            Experience Luxury Like Never Before
          </h2>
          <h3 className="text-2xl font-bold mb-8">
            50+ Exotic Locations Across The Globe
          </h3>
          <div className="border-2 w-max px-5 py-2">EXPLORE LOCATIONS</div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
