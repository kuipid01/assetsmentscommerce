import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface UserLoggedContextType {
  isLoggedIn: boolean;
}

const UserLoggedContext = createContext<UserLoggedContextType | undefined>(
  undefined
);

export const UserLoggedProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const atk = localStorage.getItem("atk");
    if (atk) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <UserLoggedContext.Provider value={{ isLoggedIn }}>
      {children}
    </UserLoggedContext.Provider>
  );
};

export const useUserLogged = (): UserLoggedContextType => {
  const context = useContext(UserLoggedContext);
  if (!context) {
    throw new Error("useUserLogged must be used within a UserLoggedProvider");
  }
  return context;
};
