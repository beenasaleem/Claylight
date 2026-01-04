import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

/* ---------- ACCORDION ITEM ---------- */
function AccordionItem({ title, id, openSections, setOpenSections, children }) {
  const isOpen = openSections[id];

  const toggle = () => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="border-b border-black py-4">
      <button
        onClick={toggle}
        className="w-full flex justify-between items-center text-left"
      >
        <span className="text-sm font-medium uppercase">
          {title}
        </span>
        <span className="text-xl">
          {isOpen ? "×" : "+"}
        </span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-40 mt-3" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-600 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}

/* ---------- PRODUCT DETAIL ---------- */
export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [activeImage, setActiveImage] = useState(0);
  const [thumbStart, setThumbStart] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // accordion (multiple open allowed)
  const [openSections, setOpenSections] = useState({});

  const visibleCount = 5;

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch(console.error);
  }, [id]);

  if (!product) {
    return <div className="py-20 text-center">Loading product…</div>;
  }

  const thumbnails = product.images || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">

      {/* ---------- BREADCRUMBS ---------- */}
      <div className="text-sm text-gray-400 mb-6">
        <Link to="/" className="hover:text-black">Home</Link>
        <span className="mx-1">/</span>
        <Link to="/products/all" className="hover:text-black">Products</Link>
        <span className="mx-1">/</span>
        <span className="text-black">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">

        {/* ---------- LEFT: IMAGES ---------- */}
        <div className="flex gap-4">

          {/* Thumbnails */}
          <div className="flex flex-col items-center gap-2">

            <button
              onClick={() => setThumbStart((p) => Math.max(p - 1, 0))}
              disabled={thumbStart === 0}
              className={`text-gray-400 hover:text-black ${
                thumbStart === 0 && "opacity-30 cursor-not-allowed"
              }`}
            >
              ▲
            </button>

            <div className="h-[380px] overflow-hidden">
              <div
                className="flex flex-col gap-3 transition-transform duration-300 ease-in-out"
                style={{ transform: `translateY(-${thumbStart * 76}px)` }}
              >
                {thumbnails.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`w-16 h-16 rounded-lg overflow-hidden border ${
                      activeImage === index
                        ? "border-black"
                        : "border-gray-200"
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() =>
                setThumbStart((p) =>
                  Math.min(p + 1, thumbnails.length - visibleCount)
                )
              }
              disabled={thumbStart >= thumbnails.length - visibleCount}
              className={`text-gray-400 hover:text-black ${
                thumbStart >= thumbnails.length - visibleCount &&
                "opacity-30 cursor-not-allowed"
              }`}
            >
              ▼
            </button>
          </div>

          {/* Main image */}
          <div className="flex-1">
            <img
              src={product.images?.[activeImage]}
              alt={product.name}
              className="w-full h-[520px] object-cover rounded-2xl"
            />
          </div>
        </div>

        {/* ---------- RIGHT: INFO ---------- */}
        <div>
          <h1 className="text-3xl font-semibold mb-1">
            {product.name}
          </h1>

          <p className="text-gray-600 mb-4">
            {product.description}
          </p>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-sm">★★★★★</span>
            <span className="text-sm text-gray-500">1,000 Reviews</span>
          </div>

          {/* Quantity + Add to Cart */}
          <div className="flex items-center gap-4 mb-8">

            <div className="flex items-center border rounded-full px-4 py-2">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="px-2"
              >
                −
              </button>

              <span className="mx-4 min-w-[20px] text-center">
                {quantity}
              </span>

              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="px-2"
              >
                +
              </button>
            </div>

            <button
              onClick={() => addToCart(product, quantity)}
              className="bg-black text-white text-sm px-8 py-3 rounded-full hover:bg-gray-800 transition"
            >
              add to bag PKR {product.price * quantity}
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-2 gap-y-2 text-sm mb-10">
            <p>🌱 Vegan</p>
            <p>⏱️ 40 hours</p>
            <p>🐰 Cruelty-free</p>
            <p>💧 Clean burn</p>
            <p>🎨 Highly pigmented</p>
            <p>✨ Premium finish</p>
          </div>

          {/* ---------- ACCORDION ---------- */}
          <AccordionItem
            title="product details"
            id="details"
            openSections={openSections}
            setOpenSections={setOpenSections}
          >
            A calming lavender candle designed to relax your senses.
          </AccordionItem>

          <AccordionItem
            title="ingredients"
            id="ingredients"
            openSections={openSections}
            setOpenSections={setOpenSections}
          >
            Soy wax blend, fragrance oils, cotton wick.
          </AccordionItem>

          <AccordionItem
            title="application tips"
            id="tips"
            openSections={openSections}
            setOpenSections={setOpenSections}
          >
            Trim wick before lighting. Burn 2–3 hours on first use.
          </AccordionItem>

          <AccordionItem
            title="pairs with"
            id="pairs"
            openSections={openSections}
            setOpenSections={setOpenSections}
          >
            Vanilla, sandalwood, chamomile candles.
          </AccordionItem>
        </div>
      </div>
    </div>
  );
}
