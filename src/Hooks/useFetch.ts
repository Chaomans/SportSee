import { useEffect, useState } from "react";
import getData from "../mock/data";

const useFetch = <T,>(url: string, doFetch?: number | null) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (doFetch ?? 0) {
      if (JSON.parse(import.meta.env.VITE_USE_MOCK)) {
        try {
          setData(getData(url) as T)
          setIsPending(false);
          setError(null);
        } catch (err) {
          setIsPending(false);
          if (err instanceof Error) setError(err.message);
        }
      } else {
        fetch(url, { method: "GET" })
          .then((res) => {
            if (!res.ok) {
              throw Error("Could not fetch data.");
            }
            return res.json();
          })
          .then((resData) => {
            setData(resData.data);
            setIsPending(false);
            setError(null);
          })
          .catch((err) => {
            setIsPending(false);
            setError(err.message);
          });
      }
    }
  }, [url, doFetch]);
  return { data, isPending, error };
};

export default useFetch;
