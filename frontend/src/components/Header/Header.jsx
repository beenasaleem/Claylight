import Logo from "./Logo";
import NavMenu from "./NavMenu";
import HeaderIcons from "./HeaderIcons";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-gradient-to-tr from-purple-200 via-pink-200 to-orange-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid grid-cols-3 items-center">
          <div className="flex justify-start">
            <button className="hover:text-pink-600 transition-colors">
              <Search size={20} />
            </button>
          </div>

          <div className="flex justify-center">
            <Logo />
          </div>

          <div className="flex justify-end">
            <HeaderIcons />
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
