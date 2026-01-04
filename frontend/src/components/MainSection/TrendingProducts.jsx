import { useState, useEffect } from "react";
import saleBanner from "../../assets/sale.png";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hoveredId, setHoveredId] = useState(null); // ✅ MOVED HERE

  useEffect(() => {
    fetch("http://localhost:5000/api/products", { cache: "no-store" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data.slice(3, 6));
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  if (loading)
    return <p className="text-center mt-10">Loading trending products...</p>;

  if (error)
    return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <section className="w-full px-3 py-0">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">

        {/* 🔥 SALE BANNER (LEFT) */}
        <div className="md:col-span-1">
          <img
            src={saleBanner}
            alt="Up to 60% Off"
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        {/* 🛍 PRODUCTS (RIGHT) */}
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white transition"
            onMouseEnter={() => setHoveredId(product._id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Image */}
            <div className="relative w-full h-50 rounded-2xl overflow-hidden bg-white flex items-center justify-center">
              {/* Base image */}
              <img
                src={product.images?.[0]}
                alt={product.name}
                className={`absolute max-h-[85%] max-w-[85%] object-contain transition-opacity duration-500
                  ${hoveredId === product._id ? "opacity-0" : "opacity-100"}
                `}
              />

              {/* Hover image */}
              {product.images?.[1] && (
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className={`absolute max-h-[85%] max-w-[85%] object-contain transition-opacity duration-500
                    ${hoveredId === product._id ? "opacity-100" : "opacity-0"}
                  `}
                />
              )}
            </div>

            {/* Content */}
            <div className="px-5 pb-6 text-center">
              {/* Name */}
              <h3 className="mt-3 text-lg font-medium">
                {product.name}
              </h3>

              <p className="mt-1 text-sm text-gray-600">
  {product.description
    ?.toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())}
</p>


               {/* Sale */}
              <p className="mt-2 text-pink-600 text-sm font-medium mb-2">
                Last Call! Up to 60% off Select Items
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
          </div>
        ))}

      </div>
    </section>
  );
};

export default TrendingProducts;
