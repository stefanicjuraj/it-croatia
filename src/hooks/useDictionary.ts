import { useEffect, useState } from "react";
// Types
import Dictionary from "../types/dictionary";

export const useDictionary = () => {
  const [dictionary, setDictionary] = useState<Dictionary[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDictionary = async () => {
      try {
        const response = await fetch("/data/dictionary.json");
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        const data = await response.json();
        setDictionary(data.dictionary);
      } catch (error) {
        setError("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchDictionary();
  }, []);

  return {
    dictionary,
    loading,
    error,
  };
};
