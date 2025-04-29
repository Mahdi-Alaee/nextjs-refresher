"use client";

import { useCartContext } from "@/context/CartContext";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BiCart } from "react-icons/bi";
import Search from "./Search";

function NavBar() {
  const pathname = usePathname();
  const { getTotalQty } = useCartContext();

  const navItems = [
    {
      href: "/",
      menu: "Home",
    },
    {
      href: "/store",
      menu: "Store",
    },
    {
      href: "/dashboard",
      menu: "Dashboard",
    },
  ];

  return (
    <nav className="flex justify-between items-center px-20 py-4 shadow-md">
      <div className="flex gap-x-4">
        {navItems.map((item) => (
          <Link
            key={item.menu}
            className={`text-lg hover:text-blue-500 hover:scale-105 ${
              item.href === "/" && pathname === "/"
                ? "text-blue-500 scale-105"
                : pathname !== "/" && item.href !== '/' && pathname.includes(item.href)
                ? "text-blue-500 scale-105"
                : ""
            }`}
            href={item.href}
          >
            {item.menu}
          </Link>
        ))}
      </div>
      <Search />
      <Link
        href="/cart"
        className={`relative text-lg hover:text-blue-500 hover:scale-105 ${
          pathname === "/cart" ? "text-blue-500 scale-105" : ""
        }`}
      >
        <span className="absolute text-sm bg-black text-white rounded-full px-1 -top-2 -right-2">
          {getTotalQty()}
        </span>
        <BiCart className="text-4xl" />
      </Link>
    </nav>
  );
}

export default NavBar;
