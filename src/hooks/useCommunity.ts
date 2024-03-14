import { useEffect, useState } from "react";
// Types
import Community from "../types/community";

export const useCommunity = () => {
  const [community, setCommunity] = useState<Community[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await fetch("/data/communities.json");
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        const data = await response.json();
        setCommunity(data.communities);
      } catch (error) {
        setError("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  return {
    community,
    loading,
    error,
  };
};
