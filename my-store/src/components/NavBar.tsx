"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiCart } from "react-icons/bi";

function NavBar() {
  const pathname = usePathname();

  const navItems = [
    {
      href: "/",
      menu: "Home",
    },
    {
      href: "/store",
      menu: "Store",
    },
  ];

  return (
    <nav className="flex justify-between items-center px-20 py-4 shadow-md">
      <div className="flex gap-x-4">
        {navItems.map((item) => (
          <Link
            key={item.menu}
            className={`text-lg hover:text-blue-500 hover:scale-105 ${
              pathname === item.href ? "text-blue-500 scale-105" : ""
            }`}
            href={item.href}
          >
            {item.menu}
          </Link>
        ))}
      </div>
      <Link href='/cart' className={`text-lg hover:text-blue-500 hover:scale-105 ${
              pathname === '/cart' ? "text-blue-500 scale-105" : ""
            }`}>
        <BiCart className="text-4xl" />
      </Link>
    </nav>
  );
}

export default NavBar;
