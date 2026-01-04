import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function NavMenu() {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  /* FETCH CATEGORIES */
  useEffect(() => {
    fetch("http://localhost:5000/api/categories")
      .then((res) => res.json())
      .then(setCategories)
      .catch(console.error);
  }, []);

  /* FETCH PRODUCTS */
  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const getProductsByCategory = (slug) => {
    if (slug === "scented") {
      return products.filter(
        (p) => p.category?.toLowerCase() !== "decorative"
      );
    }
    if (slug === "decorative") {
      return products.filter(
        (p) => p.category?.toLowerCase() === "decorative"
      );
    }
    return [];
  };

  return (
    <nav className="relative">
      <div className="w-full border-t border-gray-300" />

      <ul className="flex justify-center gap-6 py-4 text-sm md:text-base font-medium">
        {/* HOME */}
        <li>
          <Link to="/" className="hover:text-pink-600">
            Home
          </Link>
        </li>

        {categories.map((cat) => {
          const items = getProductsByCategory(cat.slug);

          return (
            <li key={cat._id} className="relative group">
              <Link
                to={`/products/${cat.slug}`}
                className={`${
                  cat.slug === "sale"
                    ? "text-pink-600 font-semibold"
                    : "hover:text-pink-600"
                }`}
              >
                {cat.name}
              </Link>

              {/* OLD STYLE DROPDOWN */}
              {cat.slug !== "sale" && items.length > 0 && (
                <div
                  className="
                    absolute left-1/2 top-full -translate-x-1/2
                    bg-white shadow-xl z-50
                    opacity-0 invisible group-hover:opacity-100 group-hover:visible
                    transition-all duration-200
                  "
                >
                  <div className="flex gap-10 px-8 py-6">
                    {/* LEFT LIST */}
                    <ul className="w-40 space-y-2">
                      {items.map((p) => (
                        <li key={p._id}>
                          <Link
                            to={`/product/${p._id}`}
                            className="block text-gray-700 hover:text-pink-600"
                          >
                            {p.name}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    {/* RIGHT IMAGES */}
                    <div className="grid grid-cols-3 gap-4">
                      {items.slice(0, 3).map((p) => (
                        <Link
                          key={p._id}
                          to={`/product/${p._id}`}
                          className="w-44 h-44 rounded-xl overflow-hidden bg-gray-100"
                        >
                          <img
                            src={p.images?.[0]}
                            alt={p.name}
                            className="w-full h-full object-cover hover:scale-105 transition"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
