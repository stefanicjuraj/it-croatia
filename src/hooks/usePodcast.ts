import { useEffect, useState } from "react";
// Types
import Podcast from "../types/podcast";

export const usePodcast = () => {
  const [podcast, setPodcast] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const response = await fetch("/data/podcasts.json");
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        const data = await response.json();
        setPodcast(data.podcasts);
      } catch (error) {
        setError("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  return {
    podcast,
    loading,
    error,
  };
};
