import { ReactNode, createContext, useContext } from "react";
import { DataContextType, performance } from "../utils/types";
import useFetch from "../Hooks/useFetch";
import { useUser } from "./UserProvider";

const DataContext = createContext<DataContextType<performance>>({
  data: null,
  isPending: true,
  error: null,
});

type PerformanceProviderProps = {
  children: ReactNode;
};

const PerformanceProvider = ({ children }: PerformanceProviderProps) => {
  // const { data: user } = useUser();
  // const [data, setData] = useState<performance | null>(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // if (user?.data.id) {
  //   const { data, isPending, error } = useFetch<performance>(
  //     `http://localhost:3000/user/${user?.data.id}/performance/`
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
  // if (error) return <p>Error fetching performance</p>;

  // return (
  //   <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  // );

  const { data: user } = useUser();
  const id = user?.id ?? null;

  const { data, isPending, error } = useFetch<performance>(
    `http://localhost:3000/user/${id}/performance/`,
    id
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
    throw Error("usePerformance must be used within DataProvider");
  }
  return context;
};

export default PerformanceProvider;
