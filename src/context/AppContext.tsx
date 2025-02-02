'use client'

import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

interface AppContextProps {
  data: string;
  setData: Dispatch<SetStateAction<string>>;
}

export const AppContext = createContext<undefined | AppContextProps>(undefined);

export default function AppContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [data, setData] = useState("salam");

  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  );
}
