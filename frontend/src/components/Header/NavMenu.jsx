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
      {/* top separator */}
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

              {cat.slug !== "sale" && items.length > 0 && (
  <>
{/* BACKDROP (NO BLUR) */}
<div
  className="
    fixed inset-0 bg-black/0
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-200 z-40 pointer-events-none
  "
/>
{/* FULL WIDTH MEGA MENU */}
<div
  className="
    fixed left-0 top-[180px]
    w-screen
    bg-white
    shadow-lg
    z-[9999]
    opacity-0 invisible group-hover:opacity-100 group-hover:visible
    transition-all duration-200
  "
>
  <div className="max-w-6xl mx-auto px-8 py-6 grid grid-cols-4 gap-6">
    
    {/* LEFT LIST */}
    <ul className="space-y-3 col-span-1">
      {items.map((p) => (
        <li key={p._id}>
          <Link
            to={`/product/${p._id}`}
            className="block text-gray-700 hover:text-pink-600 text-base"
          >
            {p.name}
          </Link>
        </li>
      ))}
    </ul>

   {/* RIGHT SIDE PRODUCT CARDS */}
<div className="col-span-3 grid grid-cols-3 gap-6">
  {items.slice(0, 3).map((p) => (
    <Link
      key={p._id}
      to={`/product/${p._id}`}
      className="bg-white transition"
    >
      {/* IMAGE WITH ROUNDED CORNERS ONLY */}
      <div className="h-40 w-full overflow-hidden rounded-xl">
        <img
          src={p.images?.[0]}
          alt={p.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* PRODUCT INFO */}
      <div className="p-4 text-center space-y-1">
        <h3 className="font-medium text-gray-800 text-base">{p.name}</h3>


        <div className="flex justify-center items-center gap-1 text-black-500 text-sm">
          {"★".repeat(Math.round(p.rating || 0)) || "★"}
          <span className="text-gray-500 ml-1 text-xs">
            ({p.reviews?.length || 0} reviews)
          </span>
        </div>
        <p className="mt-3 px-4 py-2 border border-black rounded-full text-sm
                hover:bg-black hover:text-white transition">add to bag PKR {p.price}</p>
      </div>
    </Link>
  ))}
</div>



  </div>
</div>




  </>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
