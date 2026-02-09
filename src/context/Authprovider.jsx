import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();


const Authprovider = ({ children }) => {
    const [useData, setUseData] = useState(null);
    // localStorage.clear() 
    useEffect(() => {
      setLocalStorage()
      const { employees} = getLocalStorage(); 
      setUseData(employees);
    }, []);
    
  return (
    <div>
      <AuthContext.Provider value={[useData,setUseData]}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
