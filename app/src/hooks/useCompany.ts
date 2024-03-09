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
  const [search, setSearch] = useState<string>("");
  const [filterCompanies, setfilterCompanies] = useState<Company[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [dropdown, setDropdown] = useState(false);

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

  useEffect(() => {
    setfilterCompanies(
      companies.filter(
        (company) =>
          company.Company.toLowerCase().includes(search.toLowerCase()) &&
          (tags.length === 0 ||
            company.Industry.some((industry) => tags.includes(industry)))
      )
    );
  }, [companies, search, tags]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.toLowerCase();
    setSearch(input);
  };

  const searchTerm = (term: string) => {
    setSearch(term);
  };

  const toggleDropdown = () => setDropdown(!dropdown);

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
    companies: filterCompanies,
    loading,
    error,
    setSearch,
    searchTerm,
    search,
    tagInput,
    tags,
    toggleDropdown,
    dropdown,
    searchInput,
    checkboxInput,
    industryTags,
    mapTags,
  };
};
