import { ShoppingBag, User, Heart } from "lucide-react";
import { useCart } from "../../context/CartContext";

export default function HeaderIcons() {
  const { cartCount, setIsCartOpen } = useCart();

  return (
    <div className="flex items-center gap-6">

      {/* Wishlist */}
      <button className="hover:text-pink-600 transition">
        <Heart size={20} />
      </button>

      {/* Profile */}
      <button className="hover:text-pink-600 transition">
        <User size={20} />
      </button>

      {/* Cart */}
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative hover:text-pink-600 transition"
      >
        <ShoppingBag size={22} />

        {/* CART COUNTER BADGE */}
        {cartCount > 0 && (
          <span
            className="
              absolute -top-2 -right-2
              bg-black text-white text-[10px]
              w-5 h-5 rounded-full
              flex items-center justify-center
            "
          >
            {cartCount}
          </span>
        )}
      </button>

    </div>
  );
}
