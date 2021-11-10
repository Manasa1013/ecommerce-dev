import { React, useContext, createContext, useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
export const useRoute = () => {
  return useContext(RouteContext);
};
export const RouteContext = createContext();
export const RouteProvider = ({ children }) => {
  const [route, setRoute] = useState("products");
  return (
    <div>
      <RouteContext.Provider value={{ route, setRoute }}>
        {children}
      </RouteContext.Provider>
    </div>
  );
};
