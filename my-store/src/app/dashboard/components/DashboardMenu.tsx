"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

function DashboardMenu() {
  const [items] = useState([
    { id: 1, title: "محصولات", href: "products" },
    { id: 2, title: "سفارشات", href: "orders" },
  ]);
  const pathname = usePathname();

  return (
    <ul className="flex gap-x-1 justify-center mt-12">
      {items.map((item) => (
        <li className={`text-lg py-1 px-2 rounded-md duration-150 hover:bg-blue-500 hover:text-white ${pathname === "/dashboard/" + item.href ? 'bg-blue-500 text-white' : ''}`}key={item.id}>
          <Link href={"/dashboard/" + item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export default DashboardMenu;
