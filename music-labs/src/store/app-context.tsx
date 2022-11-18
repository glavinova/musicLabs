import React from 'react';
import { useState } from "react";

type ContextType = {
    filterTerm: string;
    setSearchInput: (term: string) => void;
};

const AppContext = React.createContext<ContextType>({
    filterTerm: "",
    setSearchInput: (term: string) => {},
});

export const AppContextProvider = (props?: any) => {
    const [filterTerm, setFilterTerm] = useState("");
   
    const setSearchInput = (term: string) => {
        setFilterTerm(term);
      };
      
    const contextValue: ContextType = {
        filterTerm: filterTerm,
        setSearchInput: setSearchInput
    };
  
    return (
      <AppContext.Provider value={contextValue}>
        {props.children}
      </AppContext.Provider>
    );
  };
  
  export default AppContext;
