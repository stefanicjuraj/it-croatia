import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
// Services
import { db } from "../services/firebase";
// Types
import Community from "../types/community";

export const useCommunity = () => {
  const [community, setCommunity] = useState<Community[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filterCommunity, setFilterCommunity] = useState<Community[]>([]);

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const docRef = await getDoc(doc(db, "collection", "document"));
        if (docRef.exists()) {
          const data = docRef.data();
          setCommunity(data.communities);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchCommunities();
  }, []);

  useEffect(() => {
    setFilterCommunity(
      community.filter((community) =>
        community.Community.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [community, search]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearch(input);
  };

  const handleSearchChange = (term: string) => {
    setSearch(term);
  };

  return {
    community: filterCommunity,
    loading,
    error,
    setSearch,
    handleSearchChange,
    search,
    searchInput,
  };
};
