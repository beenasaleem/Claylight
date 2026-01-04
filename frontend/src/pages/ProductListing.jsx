import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductListing() {
  const { addToCart } = useCart();
  const { category } = useParams();

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  useEffect(() => {
    let result = [];

    if (category === "all") {
      result = products;
    } else if (category === "scented") {
      result = products.filter(
        (p) => p.category?.toLowerCase() !== "decorative"
      );
    } else {
      result = products.filter(
        (p) => p.category?.toLowerCase() === category
      );
    }

    setFilteredProducts(result);
  }, [category, products]);

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading products...
      </div>
    );
  }

  return (
    <div className="w-full px-6 py-8">

      <h1 className="text-2xl font-semibold mb-8 capitalize">
        {category === "all" ? "All Products" : `${category} candles`}
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <Link
            key={product._id}
            to={`/product/${product._id}`}
            className="group"
          >
            {/* IMAGE WITH HOVER SWAP */}
            <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-64">
              <img
                src={product.images?.[0]}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover
                transition-opacity duration-300 group-hover:opacity-0"
              />

              {product.images?.[1] && (
                <img
                  src={product.images[1]}
                  alt={product.name}
                  className="absolute inset-0 w-full h-full object-cover
                  transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                />
              )}
            </div>

            {/* INFO */}
            <div className="mt-4 text-center">
              <h3 className="text-lg font-medium">
                {product.name}
              </h3>

              <p className="text-gray-500 text-sm">
                Hand-poured luxury candle
              </p>

              <div className="flex items-center justify-center gap-2 mt-1">
                <span className="text-sm">★★★★★</span>
                <span className="text-sm text-gray-500">
                  1,000 Reviews
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  addToCart(product, 1);
                }}
                className="mt-3 px-4 py-2 border border-black rounded-full text-sm
                hover:bg-black hover:text-white transition"
              >
                add to cart PKR {product.price}
              </button>
            </div>
          </Link>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-gray-500 mt-10">
          No products found in this category.
        </p>
      )}
    </div>
  );
}
