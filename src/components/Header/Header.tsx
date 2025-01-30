'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const navBar = [
    { text: "Home", href: "/" },
    { text: "products", href: "/products" },
    { text: "Product", href: "/products/1" },
    { text: "About", href: "/about" },
    { text: "ContactUs", href: "/contactus" },
  ];

  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul className="flex gap-x-2 p-2">
          {navBar.map((item) => (
            <li className={`${item.href === pathname ? 'text-blue-500' : ''}`} key={item.text}>
              <Link href={item.href}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
