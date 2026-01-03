import { useState, useEffect } from "react";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.slice(0, 4)); // only 4 products
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading trending products...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="w-full bg-purple-50 p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-6 text-center">Top Trending</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="rounded-2xl overflow-hidden shadow-md relative flex justify-center items-center
                       bg-gradient-to-tr from-purple-100 via-pink-100 to-orange-100
                       hover:scale-105 transition-transform duration-300"
          >
            {/* Shimmer overlay */}
            <div className="absolute inset-0 bg-white/20 animate-pulse pointer-events-none rounded-2xl"></div>

            <img
              src={product.image_link}
              alt={product.name}
              className="relative max-w-full max-h-64 object-contain p-4"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
