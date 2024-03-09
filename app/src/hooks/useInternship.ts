import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
// Services
import { db } from "../services/firebase";
// Types
import Internship from "../types/internship";

export const useInternship = () => {
  const [internship, setInternship] = useState<Internship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterInternship, setfilterInternship] = useState<Internship[]>([]);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const docRef = await getDoc(doc(db, "collection", "document"));
        if (docRef.exists()) {
          const data = docRef.data();
          setInternship(data.internships);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  useEffect(() => {
    setfilterInternship(
      internship.filter((internship) =>
        internship.Internship.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [internship, searchTerm]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearchTerm(input);
  };

  const handleSearchTermChange = (term: string) => {
    setSearchTerm(term);
  };

  return {
    internship: filterInternship,
    loading,
    error,
    setSearchTerm,
    handleSearchTermChange,
    searchTerm,
    searchInput,
  };
};
