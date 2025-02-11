"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

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
    <nav className="flex gap-x-4 p-4 shadow-md">
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
    </nav>
  );
}

export default NavBar;
