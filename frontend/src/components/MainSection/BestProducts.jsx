import { useEffect, useState } from "react";
import { Heart } from "lucide-react";

const BestProducts = () => {
  const [products, setProducts] = useState([]);
  const [hoveredId, setHoveredId] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/products", { cache: "no-store" })
      .then((res) => res.json())
      .then((data) => setProducts(data.slice(0, 4))) // only 4 products
      .catch(console.error);
  }, []);

  return (
    <div className="font-[Manrope] w-full py-6">
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 px-10">
        {products.map((product) => {
          const hasSecondImage = product.images?.length > 1;
          const imageToShow =
            hoveredId === product._id && hasSecondImage
              ? product.images[1]
              : product.images?.[0];

          return (
            <div
              key={product._id}
              onMouseEnter={() => setHoveredId(product._id)}
              onMouseLeave={() => setHoveredId(null)}
              className="flex flex-col items-center text-center relative cursor-pointer"
            >
              {/* NEW badge */}
              <span className="absolute top-2 left-3 bg-black text-white text-xs px-3 py-1 rounded-md flex items-center justify-center">
                new
              </span>

              {/* Wishlist */}
              <button className="absolute top-2 right-2 hover:text-red-500 transition">
                <Heart size={16} />
              </button>

              {/* Image */}
 <div className="mt-7 w-[300px] h-[200px]  rounded-2xl overflow-hidden relative">
  {/* Base image */}
  <img
    src={product.images?.[0]}
    alt={product.name}
    className={`absolute inset-0 w-full h-full object-contain
      transition-opacity duration-500 ease-out
      ${hoveredId === product._id ? "opacity-0" : "opacity-100"}
    `}
  />

  {/* Hover image */}
  {product.images?.[1] && (
    <img
      src={product.images[1]}
      alt={product.name}
      className={`absolute inset-0 w-full h-full object-contain
        transition-opacity duration-500 ease-out delay-75
        ${hoveredId === product._id ? "opacity-100" : "opacity-0"}
      `}
    />
  )}
</div>

              {/* Name */}
              <h3 className="mt-3 text-lg font-medium">
                {product.name}
              </h3>

              {/* Description */}
              <p className="mt-1 text-sm text-gray-600">
  {product.description
    ?.toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())}
</p>


              {/* Rating */}
              <div className="mt-2 text-sm">
                ★★★★★ <span className="text-gray-500">(6 Reviews)</span>
              </div>

              {/* Button */}
              <button className="mt-3 px-4 py-2 border border-black rounded-full font-bold text-sm hover:bg-black hover:text-white transition">
                add to bag Rs {product.price}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 

export default BestProducts;
