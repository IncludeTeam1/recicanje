import { useContext, createContext, useState } from 'react';

export const Auth = createContext();

function AuthContext({ children }) {
  const [user, setUser] = useState(null);

  return <Auth.Provider value={{ user, setUser }}>{children}</Auth.Provider>;
}
export const useAuth = () => useContext(Auth);

export { AuthContext };
