import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

function Container({ children, className }: ContainerProps) {
  return <div className={"container mx-auto " + className}>{children}</div>;
}

export default Container;
