import { useContext, createContext, useReducer } from "react";
import "../random-data/faker-data";
export const useFilter = () => {
  return useContext(FilterContext);
};

export const FilterContext = createContext();
export const filterReducer = (state, action) => {
  switch (action.type) {
    case "FAST_DELIVERY": 
  }
};
export const FilterProvider = (children) => {
  const [state, dispatch] = useReducer(filterReducer, {
    showFastDelivery: true,
    showInventoryAll: false,
    sortBy: undefined
  });
  return (
    <FilterContext.Provider value={{ state, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};
