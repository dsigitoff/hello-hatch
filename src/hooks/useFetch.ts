import { useEffect, useState } from "react";

interface TProps {
  url: string;
  options: {};
}

export const useFetch = ({ url, options }: TProps) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState<unknown | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const res = await fetch(url, options);
        const json = await res.json();

        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  return { response, error, isLoading };
};
