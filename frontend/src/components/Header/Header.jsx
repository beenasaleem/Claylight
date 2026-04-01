import Logo from "./Logo";
import NavMenu from "./NavMenu";
import HeaderIcons from "./HeaderIcons";
import { Search } from "lucide-react";
import { useState } from "react";
import SearchDrawer from "./SearchDrawer";

export default function Header() {

  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="relative z-30 bg-white">

      <div className="max-w-sm-screen px-6 py-4">
        <div className="grid grid-cols-3 items-center">

          <div className="flex justify-start">
            <button onClick={() => setIsSearchOpen(true)}>
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
      </div>

      <NavMenu />

      <SearchDrawer
        isOpen={isSearchOpen}
        setIsOpen={setIsSearchOpen}
      />

    </header>
  );
}