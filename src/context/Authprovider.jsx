import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();


const Authprovider = ({ children }) => {
    const [useData, setUseData] = useState(null);
    // localStorage.clear() 
    useEffect(() => {
      setLocalStorage()
      const { employees, admin} = getLocalStorage(); 
      setUseData({employees, admin});
    }, []);
    
  return (
    <div>
      <AuthContext.Provider value={useData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default Authprovider;
