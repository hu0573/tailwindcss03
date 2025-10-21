function DiscountBanner() {
  return (
    <div className="mt-5 mx-auto max-w-7xl px-8">
      <div
        className="h-70 bg-cover bg-center bg-no-repeat flex flex-col justify-center"
        style={{
          backgroundImage:
            "linear-gradient(90deg,rgba(0,150,0,0.7) 80%,rgba(255,255,255,0.7))",
        }}
      >
        <div className="text-white mx-10 flex flex-col mt-20">
          <h2 className="text-3xl font-bold mb-2">
            Save upto 50% on broker commissions
          </h2>
          <h3 className="text-xl mb-8">Lowest Brokerage Fees</h3>
          <div className="border-2 w-max font-bold px-5 py-2 bg-white text-black rounded-xl ">
            ENQUIRE
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscountBanner;
