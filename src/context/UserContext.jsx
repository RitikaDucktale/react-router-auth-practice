import { useContext, createContext, useState, Children } from "react";

const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  return (
    <UserContext.Provider value={{ users, setUsers, isLoading, setLoading }}>
      {children}
    </UserContext.Provider>
  );
};
export const useUserContext = () => useContext(UserContext);
