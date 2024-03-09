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
  const [searchTerm, setSearchTerm] = useState<string>("");
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
        certificate.Certificate.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [certificates, searchTerm]);

  const searchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value.trim();
    const sanitizeInput = input.replace(/[^a-zA-Z0-9.]+/g, "");
    setSearchTerm(sanitizeInput);
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return {
    certificates: filterCertificates,
    loading,
    error,
    setSearchTerm,
    handleSearchChange,
    searchTerm,
    searchInput,
  };
};
