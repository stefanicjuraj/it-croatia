import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
// Services
import { db } from "../services/firebase";
// Types
import Podcast from "../types/podcast";

export const usePodcast = () => {
  const [podcast, setPodcast] = useState<Podcast[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterPodcasts, setFilterPodcasts] = useState<Podcast[]>([]);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const docRef = await getDoc(doc(db, "collection", "document"));
        if (docRef.exists()) {
          const data = docRef.data();
          setPodcast(data.podcasts);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  useEffect(() => {
    setFilterPodcasts(
      podcast.filter((podcast) =>
        podcast.Podcast.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [podcast, searchTerm]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchTerm(input);
  };

  const handleSearchInput = (term: string) => {
    setSearchTerm(term);
  };

  return {
    podcast: filterPodcasts,
    loading,
    error,
    setSearchTerm,
    handleSearchInput,
    searchTerm,
    searchInput,
  };
};
