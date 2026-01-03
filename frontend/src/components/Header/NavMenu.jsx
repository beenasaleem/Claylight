export default function NavMenu() {
  const menuItems = [
    { name: "Face", sub: ["Foundation", "Blush", "Highlighter"] },
    { name: "Body", sub: ["Body Lotion", "Body Scrub", "Sunscreen"] },
    { name: "Eyes", sub: ["Eyeshadow", "Mascara", "Eyeliners"] },
    { name: "Lips", sub: ["Lipstick", "Lip Gloss", "Lip Balm"] },
    { name: "Sale", sub: [] },
  ];

  return (
    <nav className="relative">
      <ul className="flex gap-4 sm:gap-6 text-xs sm:text-sm md:text-base lg:text-lg font-medium justify-center">
        {menuItems.map((item, idx) => (
          <li key={idx} className="relative group">
            <a
              href="#"
              className={`hover:text-pink-600 ${
                item.name === "Sale" ? "text-red-600 font-semibold hover:underline" : ""
              }`}
            >
              {item.name}
            </a>

            {item.sub.length > 0 && (
              // Full-width dropdown
              <div className="absolute left-0 top-full w-full bg-white shadow-lg opacity-0 translate-y-2
                              group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                <div className="max-w-7 xl mx-auto flex justify-evenly px-6 py-4">
                  {item.sub.map((subItem) => (
                    <a
                      key={subItem}
                      href="#"
                      className="px-4 py-2 text-gray-700 hover:bg-pink-100 rounded transition-colors"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
