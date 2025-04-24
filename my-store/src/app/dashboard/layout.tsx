import { ReactNode } from "react";
import DashboardMenu from "./components/DashboardMenu";
import Container from "@/components/Container";
import { ToastContainer } from "react-toastify";

function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <DashboardMenu />

      <main>
        <Container className="mt-12 flex flex-col gap-y-4">
          {children}
        </Container>
        <ToastContainer position="top-center"  />
      </main>
    </div>
  );
}

export default DashboardLayout;
