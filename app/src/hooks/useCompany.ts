import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
// Services
import { db } from "../services/firebase";
// Types
import Company from "../types/company";

export const useCompany = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const industryTags = [
    "Software Development",
    "IT Services",
    "IT Consulting",
    "Internet",
    "Security",
    "Electronics",
    "Information Services",
    "Marketing Services",
    "Media",
  ];

  const mapTags: { [key: string]: string } = {
    "IT Services": "IT Services",
    "IT Consulting": "IT Consulting",
    "Software Development": "Software Development",
    Information: "Information",
    Media: "Media Services",
    Internet: "Internet Services",
    Electronics: "Electronics",
    "Marketing Services": "Marketing Services",
    "Information Services": "Information Services",
    Security: "Cybersecurity",
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const docRef = await getDoc(doc(db, "collection", "document"));
        if (docRef.exists()) {
          const data = docRef.data();
          setCompanies(data.companies);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchCompanies();
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
    companies: companies,
    loading,
    error,
    tagInput,
    tags,
    checkboxInput,
    industryTags,
    mapTags,
  };
};
