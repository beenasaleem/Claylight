import { Heart, User, ShoppingBag, Globe, Search } from "lucide-react";

export default function HeaderIcons() {
  return (
    <div className="flex items-center gap-5">
      <button className="hover:text-pink-600">
        <Search size={20} />
      </button>

      <button className="hover:text-pink-600">
        <Heart size={20} />
      </button>

      <button className="hover:text-pink-600">
        <User size={20} />
      </button>

      <button className="hover:text-pink-600 relative">
        <ShoppingBag size={20} />
        <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
          2
        </span>
      </button>

      <button className="hover:text-pink-600">
        <Globe size={20} />
      </button>
    </div>
  );
}
