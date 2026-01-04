import BestProducts from "./BestProducts";
import BannerTop from "./BannerTop";
import TrendingProducts from "./TrendingProducts";
import BannerMid from "./BannerMid";

const Main = () => {
  return (
    <main className="flex-1 bg-white-200 flex flex-col gap-4">
      <BannerTop />
      <BestProducts />
      <BannerMid />
      <TrendingProducts />
    </main>
  );
};

export default Main;

