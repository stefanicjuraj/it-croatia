import { useEffect, useState } from "react";
// Types
import Certificate from "../types/certificate";

export const useCertificate = () => {
  const [certificates, setCertificates] = useState<Certificate[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const response = await fetch("/data/certificates.json");
        if (!response.ok) {
          throw new Error("Error fetching data.");
        }
        const data = await response.json();
        setCertificates(data.certificates);
      } catch (error) {
        setError("Error fetching data: " + error);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  return {
    certificates,
    loading,
    error,
  };
};
