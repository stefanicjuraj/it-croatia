import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
// Services
import { db } from "../services/firebase";
// Types
import Education from "../types/education";

export const useEducation = () => {
  const [education, setEducation] = useState<Education[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filterEducation, setFilteredEducation] = useState<Education[]>([]);

  useEffect(() => {
    const fetchEducation = async () => {
      try {
        const docRef = await getDoc(doc(db, "collection", "document"));
        if (docRef.exists()) {
          const data = docRef.data();
          setEducation(data.education);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchEducation();
  }, []);

  useEffect(() => {
    setFilteredEducation(
      education.filter((education) =>
        education.Course.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [education, search]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearch(input);
  };

  const handleSearchTermChange = (term: string) => {
    setSearch(term);
  };

  return {
    education: filterEducation,
    loading,
    error,
    setSearch,
    handleSearchTermChange,
    search,
    searchInput,
  };
};
