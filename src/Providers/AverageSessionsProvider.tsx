import { ReactNode, createContext, useContext } from "react";
import { DataContextType, averageSessions } from "../utils/types";
import useFetch from "../Hooks/useFetch";

const DataContext = createContext<DataContextType<averageSessions>>({
  data: null,
  isPending: true,
  error: null,
});

type AverageSessionsProviderProps = {
  children: ReactNode;
  userId: number | null;
};

const AverageSessionsProvider = ({
  children,
  userId,
}: AverageSessionsProviderProps) => {
  if (!userId) {
    return (
      <DataContext.Provider
        value={{ data: null, isPending: true, error: null }}
      >
        {children}
      </DataContext.Provider>
    );
  }
  const { data, isPending, error } = useFetch<averageSessions>(
    `http://localhost:3000/user/${userId}/average-sessions/`
  );

  return (
    <DataContext.Provider value={{ data, isPending, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useAverageSessions = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("useUser must be used within DataProvider");
  }
  return context;
};

export default AverageSessionsProvider;
