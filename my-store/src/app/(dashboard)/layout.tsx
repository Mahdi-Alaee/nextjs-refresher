import { ReactNode } from "react";
import DashboardMenu from "./components/DashboardMenu";

function DashboardLayout({children}:{children:ReactNode}) {
  return (
    <div>
      <DashboardMenu />

      <main>{children}</main>
    </div>
  );
}

export default DashboardLayout;
