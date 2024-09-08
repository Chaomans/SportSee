import { useEffect, useState } from "react";
import { activity, averageSessions, performance, user } from "../utils/types";
import getData from "../mock/data";

const useFetchMock = (url: string,) => {
  const [data, setData] = useState<user | activity | averageSessions | performance | null>(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      const res = getData(url);
      if (res) {
        setData(res)
        setIsPending(false)
        setError(null)
      }
    } catch (err) {
      setIsPending(false)
      if (err instanceof Error) setError(err.message);
    }
  }, [url])

  return { data, isPending, error }
}

export default useFetchMock;