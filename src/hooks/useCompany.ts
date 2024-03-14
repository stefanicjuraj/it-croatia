import { useEffect, useState } from "react";
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