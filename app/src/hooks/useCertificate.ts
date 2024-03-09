import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
// Services
import { db } from "../services/firebase";
// Types
import Certificate from "../types/certificate";

export const useCertificate = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");
  const [filterCertificates, setFilterCertificates] = useState<Certificate[]>(
    []
  );

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const docRef = await getDoc(doc(db, "collection", "document"));
        if (docRef.exists()) {
          const data = docRef.data();
          setCertificates(data.certificates);
        } else {
          setError("No such document!");
        }
      } catch (error) {
        setError("Error fetching document.");
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  useEffect(() => {
    setFilterCertificates(
      certificates.filter((certificate) =>
        certificate.Certificate.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [certificates, search]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    setSearch(input);
  };

  const handleSearchChange = (term: string) => {
    setSearch(term);
  };

  return {
    certificates: filterCertificates,
    loading,
    error,
    setSearch,
    handleSearchChange,
    search,
    searchInput,
  };
};
