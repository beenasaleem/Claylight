import { X, Trash2 } from "lucide-react";
import { useCart } from "./CartContext";

export default function CartDrawer() {
  const {
    cart,
    removeFromCart,
    updateQuantity,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <>
      {/* OVERLAY */}
   {/* OVERLAY */}
{isCartOpen && (
  <div
    onClick={() => setIsCartOpen(false)}
    className="fixed inset-0 bg-black/50 z-40"
  />
)}


      {/* DRAWER */}
      <div
  className={`fixed top-0 right-0 h-full w-[380px] bg-white z-50
  transform transition-transform duration-300
  ${isCartOpen ? "translate-x-0" : "translate-x-full"}
  flex flex-col`}

      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">
            Cart ({cart.length})
          </h2>
          <button onClick={() => setIsCartOpen(false)}>
            <X />
          </button>
        </div>

        {/* ITEMS */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-6">
          {cart.length === 0 && (
            <p className="text-gray-500 text-sm">
              Your cart is empty.
            </p>
          )}

         {cart.map((item) => (
  <div
    key={item.id}
    className="flex gap-4 items-start border-b pb-4"
  >
    {/* IMAGE */}
    <img
      src={item.image}
      alt={item.name}
      className="w-20 h-20 object-cover rounded"
    />

    {/* RIGHT CONTENT (SAME HEIGHT AS IMAGE) */}
    <div className="flex-1 flex flex-col justify-between h-20">

      {/* NAME + PRICE */}
      <div>
        <h3 className="text-sm font-medium leading-tight">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600">
          PKR {item.price}
        </p>
      </div>

      {/* COUNTER + DELETE (ONE LINE) */}
      <div className="flex items-center justify-between">

        {/* COUNTER */}
        <div className="flex items-center gap-3 border rounded-full px-3 py-1">
          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity - 1)
            }
            className="w-6 h-6 flex items-center justify-center
            rounded-full hover:bg-gray-100 transition"
          >
            −
          </button>

          <span className="text-sm min-w-[16px] text-center">
            {item.quantity}
          </span>

          <button
            onClick={() =>
              updateQuantity(item.id, item.quantity + 1)
            }
            className="w-6 h-6 flex items-center justify-center
            rounded-full hover:bg-gray-100 transition"
          >
            +
          </button>
        </div>

        {/* DELETE */}
        <button
          onClick={() => removeFromCart(item.id)}
          className="text-gray-400 hover:text-black transition"
        >
          <Trash2 size={18} />
        </button>

      </div>
    </div>
  </div>
          ))}
        </div>

        {/* FOOTER */}
        <div className="border-t px-5 py-4">
          <div className="flex justify-between mb-4">
            <span className="font-medium">Subtotal</span>
            <span className="font-medium">
              PKR {subtotal}
            </span>
          </div>

          <button className="w-full bg-black text-white py-3 rounded-full">
            Checkout
          </button>

          <p className="text-xs text-gray-500 mt-3 text-center">
            Taxes & shipping calculated at checkout
          </p>
        </div>
      </div>
    </>
  );
}
