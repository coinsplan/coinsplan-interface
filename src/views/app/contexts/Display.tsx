import { useRouter } from "next/router";
import { createContext, FC, useContext, useEffect, useState } from "react";

interface IDisplayContext {
  currentDisplay: string;
}

interface IDisplayProvider {
  currentDisplay: string;
  children?: any;
}

const defaultConextValue: IDisplayContext = {
  currentDisplay: "",
};

export const DisplayContext =
  createContext<IDisplayContext>(defaultConextValue);

export const DisplayProvider: FC<IDisplayProvider> = ({
  children,
  currentDisplay,
}) => {
  return (
    <DisplayContext.Provider
      value={{
        currentDisplay,
      }}
    >
      {children}
    </DisplayContext.Provider>
  );
};

export const useDisplay = () => useContext(DisplayContext);
