import { ReactNode } from "react";

function Container({ children }: { children: ReactNode }) {
  return <div className="container mx-auto">{children}</div>;
}

export default Container;
