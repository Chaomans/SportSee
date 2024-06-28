import { ReactNode, createContext, useContext } from "react";
import { DataContextType, activity } from "../utils/types";
import useFetch from "../Hooks/useFetch";

const DataContext = createContext<DataContextType<activity>>({
  data: null,
  isPending: true,
  error: null,
});

type ActivityProviderProps = {
  children: ReactNode;
  userId: number | null;
};

const ActivityProvider = ({ children, userId }: ActivityProviderProps) => {
  if (!userId) {
    return (
      <DataContext.Provider
        value={{ data: null, isPending: true, error: null }}
      >
        {children}
      </DataContext.Provider>
    );
  }
  const { data, isPending, error } = useFetch<activity>(
    `http://localhost:3000/user/${userId}/activity/`
  );

  return (
    <DataContext.Provider value={{ data, isPending, error }}>
      {children}
    </DataContext.Provider>
  );
};

export const useActivity = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw Error("useUser must be used within DataProvider");
  }
  return context;
};

export default ActivityProvider;
