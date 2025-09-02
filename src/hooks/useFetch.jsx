import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);   // API data
  const [loading, setLoading] = useState(true); // loading state
  const [error, setError] = useState(null); // error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);   // start loading
        const res = await fetch(url, {
          credentials: "include",
        });
        if (!res.ok) {
          throw new Error("Failed to fetch data"); // যদি response না আসে
        }
        const result = await res.json();
        setData(result.data);   // set data
        setError(null);    // reset error
      } catch (err) {
        setError(err.message); // error set
        setData(null);
      } finally {
        setLoading(false);  // শেষ হলে loading বন্ধ
      }
    };

    fetchData();
  }, [url]); // url পরিবর্তন হলে আবার fetch হবে

  return { data, loading, error };
};

export default useFetch;
