import { useEffect, useState } from "react";
// Types
import Workplace from "../types/workplace";

export const useWorkplace = () => {
  const [workplace, setWorkplace] = useState<Workplace[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    const fetchWorkplace = async () => {
      try {
        const response = await fetch("/data/workplaces.json");
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        const data = await response.json();
        setWorkplace(data.workplaces);
      } catch (error) {
        setError("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkplace();
  }, []);

  const tagInput = (tags: string[]) => {
    setTags(tags);
  };
  const checkboxInput = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter((t) => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  return {
    workplace,
    loading,
    error,
    tagInput,
    checkboxInput,
    tags,
  };
};
