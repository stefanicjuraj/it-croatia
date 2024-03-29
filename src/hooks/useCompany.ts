import { useEffect, useState } from "react";
// Types
import Company from "../types/company";

export const useCompany = () => {
  const [companies, setCompanies] = useState<Company[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const industryTags = [
    "Information Technology",
    "Software Development",
    "Game Development",
    "IT Services",
    "Cybersecurity",
    "Design Services",
    "Marketing Services",
    "Media Technology",
    "Telecommunications",
  ];

  const mapTags: { [key: string]: string } = {
    Security: "Cybersecurity",
  };

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const response = await fetch("/data/companies.json");
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        const data = await response.json();
        setCompanies(data.companies);
      } catch (error) {
        setError("Error fetching data: " + error);
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
    companies,
    loading,
    error,
    tagInput,
    tags,
    checkboxInput,
    industryTags,
    mapTags,
  };
};
