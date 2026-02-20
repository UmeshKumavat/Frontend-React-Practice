import { createContext } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const name = "Umesh";
  const age = 21;
  return (
    <UserContext.Provider value={{ name, age }}>
      {children}
    </UserContext.Provider>
  );
}
