import scentedBanner from "../../assets/banner2.png";
import decorativeBanner from "../../assets/banner3.png";

const Banner = () => {
  return (
    <div className="w-full mt-10 mb-14">
  <div className="font-[Manrope] w-full grid mx-3 grid-cols-1 md:grid-cols-2 gap-4 pl-0 pr-6
">

    {/* Scented Candles */}
    <div className="flex flex-col items-start">
      {/* Image aligned LEFT */}
      <div className="w-full h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-md">
        <img
          src={scentedBanner}
          alt="Scented Candles"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered text */}
      <div className="mt-5 w-full text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Scented Candles
        </h2>
      </div>
    </div>

    {/* Decorative Candles */}
    <div className="flex flex-col items-end">
      {/* Image aligned RIGHT */}
      <div className="w-full h-[380px] rounded-2xl overflow-hidden shadow-md hover:shadow-md">
        <img
          src={decorativeBanner}
          alt="Sculptural Candles"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Centered text */}
      <div className="mt-5 w-full text-center">
        <h2 className="text-2xl font-semibold mb-2">
          Sculptural Candles
        </h2>
      </div>
    </div>

  </div>
</div>

  );
};

export default Banner;