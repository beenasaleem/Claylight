import { Instagram, Facebook, Twitter, Music } from "lucide-react";
import Marketing from "../../assets/marketing.jpg";

const Footer = () => {
  return (
    <footer className="flex flex-col bg-gradient-to-r from-purple-300 to-pink-200">

      {/* Top content (main footer sections) */}
      <div className="flex h-80">

        {/* Left + Center Section */}
        <div className="flex-1 flex flex-col px-6 pt-6">

          {/* Top links */}
          <div className="flex justify-between items-stretch">

            {/* Left Section */}
            <div className="w-1/2 flex flex-col items-start p-6 space-y-2">
              <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl">Lily</p>
              <p className="text-white text-lg hover:text-gray-200 cursor-pointer mt-2">Contact Us</p>
              <p className="text-white text-lg hover:text-gray-200 cursor-pointer">FAQs</p>
              <p className="text-white text-lg hover:text-gray-200 cursor-pointer">About Us</p>
            </div>

            {/* Center Section */}
            <div className="w-1/2 flex flex-col items-start p-6 space-y-2">
              <p className="text-white text-lg hover:text-gray-200 cursor-pointer mt-2">Terms</p>
              <p className="text-white text-lg hover:text-gray-200 cursor-pointer">Privacy</p>
              <p className="text-white text-lg hover:text-gray-200 cursor-pointer">Cookies</p>
              <p className="text-white text-lg hover:text-gray-200 cursor-pointer">Do Not Sell My Personal Information</p>
            </div>

          </div>

          {/* Horizontal separator */}
          <div className="border-t-2 border-white w-200 opacity-50 ml-6 mt-4 mb-3"></div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            <p className="text-white text-lg ml-6 font-semibold">Social</p>
            <Music className="text-white w-6 h-6 cursor-pointer hover:text-gray-200 transition" />
            <Instagram className="text-white w-6 h-6 cursor-pointer hover:text-gray-200 transition" />
            <Facebook className="text-white w-6 h-6 cursor-pointer hover:text-gray-200 transition" />
            <Twitter className="text-white w-6 h-6 cursor-pointer hover:text-gray-200 transition" />
          </div>

        </div>

        {/* Right Section */}
        <div className="w-1/3 bg-red-300 flex flex-col p-6">
          <p className="text-white font-bold text-2xl mb-4 mt-4">
            Hey, let's keep in touch!
          </p>
<img src="https://res.cloudinary.com/dmd7wf6le/image/upload/v1766829427/ecommerce/nfgxsuvuscvgp7rlltwg.jpg" alt="Product" />
          <p className="text-white text-sm">
            By entering your email address you will receive promotional updates. 
            Consent is not a condition of purchase. 
            <span className="underline cursor-pointer">View Privacy Policy.</span>
          </p>
          <p className="text-white text-sm mt-4">Sign up</p>

          {/* Small separator */}
          <div className="border-t-2 border-white opacity-50 mt-2"></div>
        </div>

      </div>

      {/* Bottom thin bar */}
      <div className="w-full h-12 bg-pink-300 flex justify-between items-center px-4 mt-auto">
        <p className="text-gray-800 text-sm">© 2025, Lily</p>
      </div>

    </footer>
  );
};

export default Footer;
