import { useEffect, useState } from "react";
import { X, Search } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchDrawer({ isOpen, setIsOpen }) {

  const navigate = useNavigate();
  const location = useLocation();

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);

  /* Close search drawer whenever route changes */
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  const openProduct = (id) => {
    navigate(`/product/${id}`);
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[70vh] bg-white z-50 shadow-lg">

        {/* SEARCH BAR */}
        <div className="relative flex items-center justify-center py-4">

          <button
            onClick={() => setIsOpen(false)}
            className="absolute left-10"
          >
            <X size={24} />
          </button>

          <div className="relative w-[520px]">

            <input
              type="text"
              placeholder="search product"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-3 pl-6 pr-16 outline-none"
            />

            {/* CLEAR SEARCH */}
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-10 top-3 text-gray-400 hover:text-black"
              >
                <X size={18} />
              </button>
            )}

            <Search
              size={18}
              className="absolute right-4 top-3.5 text-gray-500"
            />

            {/* SEARCH SUGGESTIONS */}
            {search && (
              <div className="absolute w-full bg-white border border-gray-200 rounded-xl mt-2 shadow-xl z-50 max-h-72 overflow-y-auto">

                {filteredProducts.slice(0,5).map((product) => (
                  <div
                    key={product._id}
                    onClick={() => openProduct(product._id)}
                    className="flex items-center gap-3 px-4 py-3 cursor-pointer hover:bg-gray-50 transition"
                  >

                    <img
                      src={product.images[0]}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />

                    <div className="flex flex-col flex-1">
                      <p className="text-sm font-medium text-gray-800">
                        {product.name}
                      </p>

                      <p className="text-xs text-gray-500">
                        {product.description}
                      </p>
                    </div>

                    <p className="text-sm font-semibold text-gray-700">
                      ${product.price}
                    </p>

                  </div>
                ))}

                {filteredProducts.length === 0 && (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    No products found
                  </div>
                )}

              </div>
            )}

          </div>

        </div>

        {/* SEPARATOR */}
        <div className="border-t border-gray-200"></div>

        {/* TITLES */}
        <div className="max-w-7xl mx-auto w-full px-8 py-4">

          <div className="grid grid-cols-[220px_1fr] gap-10">

            <div>
              <p className="text-sm font-semibold">
                popular searches
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">
                popular products
              </p>
            </div>

          </div>

        </div>

        {/* SEPARATOR */}
        <div className="border-t border-gray-200 w-full"></div>

        {/* CONTENT */}
        <div className="max-w-7xl mx-auto w-full px-8 py-6">

          <div className="grid grid-cols-[220px_1fr] gap-10">

            {/* POPULAR SEARCHES */}
            <div>
              <ul className="space-y-3 text-gray-600 text-sm">

                {filteredProducts.slice(0,4).map((product) => (
                  <li
                    key={product._id}
                    onClick={() => openProduct(product._id)}
                    className="cursor-pointer hover:text-black"
                  >
                    {product.name}
                  </li>
                ))}

              </ul>
            </div>

            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-4 gap-10">

              {filteredProducts.slice(0,4).map((product) => (

                <div
                  key={product._id}
                  className="text-center flex flex-col items-center"
                >

                  <img
                    src={product.images[0]}
                    alt={product.name}
                    onClick={() => openProduct(product._id)}
                    className="rounded-xl mb-3 h-40 w-full object-cover cursor-pointer"
                  />

                  <p className="text-sm font-medium">
                    {product.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    {product.description}
                  </p>

                  <button
                    className="mt-3 border border-gray-400 rounded-full px-5 py-1.5 text-sm hover:bg-black hover:text-white transition"
                  >
                    add to bag ${product.price}
                  </button>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

      {/* OVERLAY */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed top-[70vh] left-0 w-full h-full bg-black/20 z-40"
      />
    </>
  );
}