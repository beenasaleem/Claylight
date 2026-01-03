import lipstick from "../../assets/lipstick.jpg";
const Banner = () => {
  return (
<div className="w-full h-110 mt-2 square-lg overflow-hidden shadow mb-4">
  <img
    src={lipstick}
    alt="lipstick Banner"
    className="w-full h-full object-cover"
  />
</div>

  );
};

export default Banner;
