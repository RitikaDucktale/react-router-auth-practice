import { createContext, useContext, useEffect, useState, useCallback } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedInUsers, setLoggedInUsers] = useState(null);
  // const [signedUpUsers,setSignedUpUsers] = useState([]);
  const [isLoggedIn,setIsLoggedIn] = useState(false);
   const signedUpUsers = [];
  const login = (data) => setLoggedInUsers(data);
  const logout = () => setLoggedInUsers(null); 
  
  useEffect(()=>{
    
    // if(!authUser) console.log('authUser is presenet in public Routes after Login ==',authUser)
    //   else console.log('not presnt====')

      const authUser = JSON.parse(localStorage.getItem('authUser')) || {}
      login(authUser)
  },[])
  console.log("AuthContext======= ",loggedInUsers)                            
  return (
    <AuthContext.Provider value={{ loggedInUsers, login, logout,isLoggedIn,setIsLoggedIn,signedUpUsers }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);