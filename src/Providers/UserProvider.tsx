import { ReactNode, createContext, useContext } from "react";
import { DataContextType, user } from "../utils/types";
import useFetch from "../Hooks/useFetch";
import { useParams } from "react-router-dom";

const DataContext = createContext<DataContextType<user>>({
  data: null,
  isPending: true,
  error: null,
});

type UserProviderProps = {
  children: ReactNode;
};

const UserProvider = ({ children }: UserProviderProps) => {
  // const { id } = useParams();
  // const [data, setData] = useState<user | null>(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   if (id) {
  //     const { data, isPending, error } = useFetch<user>(
  //       `http://localhost:3000/user/` + id
  //     );
  //     setData(data);
  //     setIsPending(isPending);
  //     setError(error);
  //   }
  // }, [id]);

  // if (!id)
  //   return (
  //     <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>
  //   );
  // if (isPending) return <p>Loading...{children} </p>;
  // if (error) return <p>Error fetching user</p>;

  const { id } = useParams();

  const { data, isPending, error } = useFetch<user>(
    `http://localhost:3000/user/${id}`,
    parseInt(id ?? "0")
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
