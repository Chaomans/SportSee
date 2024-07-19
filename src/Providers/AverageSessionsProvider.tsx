import { ReactNode, createContext, useContext } from "react";
import { DataContextType, averageSessions } from "../utils/types";
import useFetch from "../Hooks/useFetch";
import { useUser } from "./UserProvider";

const DataContext = createContext<DataContextType<averageSessions>>({
  data: null,
  isPending: true,
  error: null,
});

type AverageSessionsProviderProps = {
  children: ReactNode;
};

const AverageSessionsProvider = ({
  children,
}: AverageSessionsProviderProps) => {
  // const { data: user } = useUser();
  // const [data, setData] = useState<averageSessions | null>(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // if (user?.data.id) {
  //   const { data, isPending, error } = useFetch<averageSessions>(
  //     `http://localhost:3000/user/${user?.data.id}/average-sessions/`
  //   );
  //   setData(data);
  //   setIsPending(isPending);
  //   setError(error);
  // }

  // if (!user?.data.id)
  //   return (
  //     <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  //   );
  // if (isPending) return <p>Loading...{children} </p>;
  // if (error) return <p>Error fetching average sessions</p>;

  // return (
  //   <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  // );
  const { data: user } = useUser();
  const id = user?.id ?? null;

  const { data, isPending, error } = useFetch<averageSessions>(
    `http://localhost:3000/user/${id}/average-sessions/`,
    id
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
    throw Error("useAverageSessions must be used within DataProvider");
  }
  return context;
};

export default AverageSessionsProvider;
