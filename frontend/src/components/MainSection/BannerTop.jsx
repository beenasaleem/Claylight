import bannerImage from "../../assets/banner0.png";
const Banner = () => {
  return (
<div className="w-full h-full overflow-hidden rounded-2xl">
  <img
    src={bannerImage}
    alt="Claylight Banner"
    className="w-full h-full object-cover"
  />
</div>



  );
};

export default Banner;
