import { ReactNode, createContext, useContext } from "react";
import { DataContextType, user } from "../utils/types";
import useFetch from "../Hooks/useFetch";

const DataContext = createContext<DataContextType<user>>({
  data: null,
  isPending: true,
  error: null,
});

type UserProviderProps = {
  children: ReactNode;
  userId: number | null;
};

const UserProvider = ({ children, userId }: UserProviderProps) => {
  if (!userId) {
    return (
      <DataContext.Provider
        value={{ data: null, isPending: true, error: null }}
      >
        {children}
      </DataContext.Provider>
    );
  }
  const { data, isPending, error } = useFetch<user>(
    `http://localhost:3000/user/` + userId
  );

  return (
    <DataContext.Provider value={{ data, isPending, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("useUser must be used within DataProvider");
  }
  return context;
};

export default UserProvider;
