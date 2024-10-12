import React, { createContext, useState } from "react";

const LocContext = createContext();

const LocationProvider = ({ children }) => {
  const [test, setTest] = useState("mudou");
  return <LocContext.Provider value={test}>{children}</LocContext.Provider>;
};

export { LocationProvider, LocContext };
