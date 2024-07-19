import { ReactNode, createContext, useContext } from "react";
import { DataContextType, activity } from "../utils/types";
import useFetch from "../Hooks/useFetch";
import { useUser } from "./UserProvider";

const DataContext = createContext<DataContextType<activity>>({
  data: null,
  isPending: true,
  error: null,
});

type ActivityProviderProps = {
  children: ReactNode;
};

const ActivityProvider = ({ children }: ActivityProviderProps) => {
  // const [data, setData] = useState<activity | null>(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // if (user?.data.id) {
  //   const { data, isPending, error } = useFetch<activity>(
  //     `http://localhost:3000/user/${user?.data.id}/activity/`
  //   );
  //   setData(data);
  //   setIsPending(isPending);
  //   setError(error);
  // }

  // if (!user?.data.id)
  //   return (
  //     <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  //   );

  const { data: user } = useUser();
  const id = user?.id ?? null;

  const { data, isPending, error } = useFetch<activity>(
    `http://localhost:3000/user/${id}/activity/`,
    id
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
