import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [loggedInUsers, setLoggedInUsers] = useState(null);
  const login = (data) => setLoggedInUsers(data);
  const logout = () => setLoggedInUsers(null);
  return (
    <AuthContext.Provider value={{ loggedInUsers, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);