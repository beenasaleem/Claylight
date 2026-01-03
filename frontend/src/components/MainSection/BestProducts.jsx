import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0); // current slide index (0 or 1 for 8 products)

  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 12));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const handlePrev = () => {
    setSlideIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setSlideIndex((prev) => Math.min(prev + 1, Math.ceil(products.length / 4) - 1));
  };

  return (
    <div className="">

      <div className="flex items-center">
  {/* Left arrow */}
  {slideIndex > 0 && (
    <button
      onClick={handlePrev}
      className="p-2 rounded-full bg-white shadow hover:bg-gray-200 transition"
    >
      <ChevronLeft size={24} />
    </button>
  )}

  {/* Carousel */}
  <div className="overflow-hidden flex-1 mx-4">
    <div
      className="flex gap-6 transition-transform duration-500"
      style={{ transform: `translateX(-${slideIndex * 100}%)` }}
    >
      {products.map((product) => (
<div
  key={product.id}
  className="rounded-2xl p-4 shadow flex flex-col flex flex-col justify-between items-center  items-center text-center
             min-w-[250px] max-w-[250px] bg-gradient-to-tr from-purple-200 via-pink-200 to-orange-200 relative"
>
  <img
    src={product.image_link}
    alt={product.name}
    className="w-32 h-32 object-cover rounded-xl shadow-md mb-2"
  />
  
  <h3 className="font-semibold text-sm mb-1">{product.name}</h3>
  <p className="text-pink-600 font-semibold text-xs mb-1">${product.price}</p>
  <p className="text-yellow-400 text-xs mb-3">
    {"★".repeat(Math.floor(product.rating || 0)) +
      "☆".repeat(5 - Math.floor(product.rating || 0))}
  </p>
  <button className="bg-pink-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-pink-600 transition-colors -mt-1">
    Add to Cart
  </button>
</div>



      ))}
    </div>
  </div>

  {/* Right arrow */}
  {slideIndex < Math.ceil(products.length / 4) - 1 && (
    <button
      onClick={handleNext}
      className="p-2 rounded-full bg-white shadow hover:bg-gray-200 transition"
    >
      <ChevronRight size={24} />
    </button>
  )}
</div>

    </div>
  );
};

export default BestProducts;
