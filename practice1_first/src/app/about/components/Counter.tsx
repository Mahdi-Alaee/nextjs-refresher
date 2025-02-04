"use client";

import { ReactNode } from "react";

// import ServerComp from "./ServerComp";

function Counter({ children }: { children: ReactNode }) {
  return (
    <div>
      <p>Count</p>
      <button>+</button>
      <button>-</button>

      {/* <ServerComp /> "unfortunately, it turned to client side" */}

      {children}
    </div>
  );
}

export default Counter;
