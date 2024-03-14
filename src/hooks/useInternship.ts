import { useEffect, useState } from "react";
// Types
import Internship from "../types/internship";

export const useInternship = () => {
  const [internship, setInternship] = useState<Internship[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchInternships = async () => {
      try {
        const response = await fetch("/data/internships.json");
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        const data = await response.json();
        setInternship(data.internships);
      } catch (error) {
        setError("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchInternships();
  }, []);

  return {
    internship,
    loading,
    error,
  };
};
