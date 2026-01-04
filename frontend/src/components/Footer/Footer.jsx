import { Instagram, Facebook, Twitter, Youtube } from "lucide-react";
import markett from "../../assets/markett.png";

const Footer = () => {
  return (
    <footer className="mt-5 w-full text-white font-[Manrope] bg-[#FF849E]">


      {/* TOP FOOTER */}
      <div className="grid grid-cols-1 md:grid-cols-3">

        {/* LEFT + CENTER */}
        <div className="md:col-span-2 px-10 py-12">

          {/* Logo */}
          <h2 className="text-3xl font-bold mb-8 tracking-wide">
            CLAYLIGHT
          </h2>

          {/* Links */}
          <div className="grid grid-cols-2 gap-12">

            {/* Help */}
            <div>
              <p className="mb-4 font-semibold">help</p>
              <ul className="space-y-3 text-sm">
                <li className="hover:underline cursor-pointer">Contact Us</li>
                <li className="hover:underline cursor-pointer">About Us</li>
                <li className="hover:underline cursor-pointer">FAQ</li>
                <li className="hover:underline cursor-pointer">Careers Page</li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="mb-4 font-semibold">legal</p>
              <ul className="space-y-3 text-sm">
                <li className="hover:underline cursor-pointer">Terms</li>
                <li className="hover:underline cursor-pointer">Privacy</li>
                <li className="hover:underline cursor-pointer">Accessibility Statement</li>
                <li className="hover:underline cursor-pointer">Cookies</li>
                <li className="hover:underline cursor-pointer">
                  Do Not Sell My Personal Information
                </li>
                <li className="hover:underline cursor-pointer">
                  Exercise My Rights (GDPR)
                </li>
                <li className="hover:underline cursor-pointer">
                  Giveaway Terms & Conditions
                </li>
              </ul>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/40 mt-10 pt-6">

            {/* Social */}
            <div className="flex items-center gap-6">
              <p className="font-semibold">social</p>
              <Instagram className="w-5 h-5 cursor-pointer hover:opacity-70" />
              <Facebook className="w-5 h-5 cursor-pointer hover:opacity-70" />
              <Twitter className="w-5 h-5 cursor-pointer hover:opacity-70" />
              <Youtube className="w-5 h-5 cursor-pointer hover:opacity-70" />
            </div>

          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="bg-[#FC9A9C] flex flex-col">

          {/* Image */}
          <div className="h-64 overflow-hidden">
            <img
              src={markett}
              alt="Newsletter"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Newsletter */}
          <div className="px-8 py-8">
            <h3 className="text-2xl font-light mb-4">
              hey, let’s keep in touch!
            </h3>

            <p className="text-sm mb-6 leading-relaxed">
              By entering your email address you will receive promotional updates.
              Consent is not a condition of purchase.{" "}
              <span className="underline cursor-pointer">
                View Privacy Policy.
              </span>
            </p>

            <button className="text-sm font-semibold border-b border-white pb-1">
              sign up
            </button>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#E698CB] px-6 py-4 flex justify-between items-center text-sm">

        <p>© 2026, Claylight</p>
        <p className="underline cursor-pointer">pakistan (usd $)</p>
      </div>

    </footer>
  );
};

export default Footer;
