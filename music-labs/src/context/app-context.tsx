import React from "react";
import { useState } from "react";

type ContextType = {
  filterTerm: string;
  setSearchInput: (term: string) => void;
  currentUrl: string;
  setCurrentUrl: (url: string) => void;
};

const AppContext = React.createContext<ContextType>({
  filterTerm: "",
  setSearchInput: (term: string) => {},
  currentUrl: "",
  setCurrentUrl: (url: string) => {},
});

export const AppContextProvider = (props?: any) => {
  const [filterTerm, setFilterTerm] = useState("");
  const [currentUrl, setUrl] = useState("/");

  const setSearchInput = (term: string) => {
    setFilterTerm(term);
  };

  const setCurrentUrl = (url: string) => {
    setUrl(url);
  };

  const contextValue: ContextType = {
    filterTerm: filterTerm,
    setSearchInput: setSearchInput,
    currentUrl: currentUrl,
    setCurrentUrl: setCurrentUrl,
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
