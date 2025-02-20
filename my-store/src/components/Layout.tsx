import "@/app/globals.css";
import { ReactNode } from "react";
import NavBar from "./NavBar";
import { CartContextProvider } from "@/context/CartContext";

function Layout({ children }: { children: ReactNode }) {
  return (
    <CartContextProvider>
      <NavBar />
      {children}
    </CartContextProvider>
  );
}

export default Layout;
