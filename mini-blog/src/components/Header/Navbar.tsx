"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
  const [menus] = useState([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const pathname = usePathname();

  return (
    <nav>
      <ul className="flex p-4 gap-x-4 border-b-2">
        {menus.map((menu) => (
          <li
            className={`hover:text-blue-500 ${
              pathname === menu.path ? "text-blue-500" : ""
            }`}
            key={menu.name}
          >
            <Link href={menu.path}>{menu.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
