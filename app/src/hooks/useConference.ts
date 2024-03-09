import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
// Services
import { db } from "../services/firebase";
// Types
import Conference from "../types/conference";

export const useConference = () => {
  const [conferences, setConferences] = useState<Conference[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filterConferences, setFilterConference] = useState<Conference[]>([]);

  useEffect(() => {
    const fetchConferences = async () => {
      try {
        const docRef = await getDoc(doc(db, "collection", "document"));
        if (docRef.exists()) {
          const data = docRef.data();
          setConferences(data.conferences);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchConferences();
  }, []);

  useEffect(() => {
    setFilterConference(
      conferences.filter((conference) =>
        conference.Conference.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [conferences, search]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearch(input);
  };

  const searchTerm = (term: string) => {
    setSearch(term);
  };

  const countdown = (startDate: string) => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const fullStartDate = `${startDate}, ${currentYear}`;
    const start = new Date(fullStartDate);
    const difference = start.getTime() - now.getTime();
    const daysLeft = Math.ceil(difference / (1000 * 3600 * 24));

    return daysLeft > 0 ? `in ${daysLeft} days` : "ENDED";
  };

  return {
    conferences: filterConferences,
    loading,
    error,
    setSearch,
    searchTerm,
    search,
    searchInput,
    countdown,
  };
};
