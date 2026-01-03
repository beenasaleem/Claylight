import Banner from "./Banner";
import BestProducts from "./BestProducts";
import TrendingProducts from "./TrendingProducts";
import ChristmasBanner from "./ChristmasBanner";

const Main = () => {
  return (
    <main className="flex-1 bg-white-200 flex flex-col gap-4">
      <Banner />
      <BestProducts />
      <TrendingProducts />
      <ChristmasBanner />
    </main>
  );
};

export default Main;

