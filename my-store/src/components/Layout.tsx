import "@/app/globals.css";
import { ReactNode } from "react";
import NavBar from "./NavBar";

function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
}

export default Layout;
