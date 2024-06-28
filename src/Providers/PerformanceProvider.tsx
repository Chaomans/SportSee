import { ReactNode, createContext, useContext } from "react";
import { DataContextType, performance } from "../utils/types";
import useFetch from "../Hooks/useFetch";

const DataContext = createContext<DataContextType<performance>>({
  data: null,
  isPending: true,
  error: null,
});

type PerformanceProviderProps = {
  children: ReactNode;
  userId: number | null;
};

const PerformanceProvider = ({
  children,
  userId,
}: PerformanceProviderProps) => {
  if (!userId) {
    return (
      <DataContext.Provider
        value={{ data: null, isPending: true, error: null }}
      >
        {children}
      </DataContext.Provider>
    );
  }
  const { data, isPending, error } = useFetch<performance>(
    `http://localhost:3000/user/${userId}/performance/`
  );

  return (
    <DataContext.Provider value={{ data, isPending, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("useUser must be used within DataProvider");
  }
  return context;
};

export default PerformanceProvider;
