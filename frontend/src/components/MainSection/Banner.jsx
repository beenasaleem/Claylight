import Sale from "../../assets/blushes.jpg";
const Banner = () => {
  return (
<div className="w-full h-110 mt-2 square-lg overflow-hidden shadow mb-4">
  <img
    src={Sale}
    alt="Sale Banner"
    className="w-full h-full object-cover"
  />
</div>

  );
};

export default Banner;
