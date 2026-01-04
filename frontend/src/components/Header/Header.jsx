import Logo from "./Logo";
import NavMenu from "./NavMenu";
import HeaderIcons from "./HeaderIcons";
import { Search } from "lucide-react";

export default function Header() {
  return (
  <header className="relative z-30 bg-white">
  <div className="max-w-sm-screen px-6 py-4">
    <div className="grid grid-cols-3 items-center">
      <div className="flex justify-start">
        <Search size={20} />
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
</header>

  );
}
