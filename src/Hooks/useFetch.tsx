import { useEffect, useState } from "react";

const useFetch = <T,>(url: string, doFetch?: number | null) => {
  const [data, setData] = useState<T | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (doFetch ?? 0) {
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
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
