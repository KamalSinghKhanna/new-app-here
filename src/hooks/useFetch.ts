import { useState, useEffect } from "react";

interface PostOffice {
  PINCode: string;
  State: string;
  District: string;
  Name: string;
}

interface PincodeData {
  Status: string;
  Message: string;
  PostOffice: PostOffice[] | null;
}

const useFetch = (pincode: string) => {
  const [data, setData] = useState<PincodeData[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string|null>(null);

  useEffect(() => {
    if (!pincode || pincode.length !== 6) {
      setData(null); // Clear data if pincode length is not 6
      setError(null)
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await fetch(
          `https://api.postalpincode.in/pincode/${pincode}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result: PincodeData[] = await response.json();
        if (result[0].Status === "Error" || !result[0].PostOffice) {
          throw new Error(result[0].Message);
        }
        setData(result);
      } catch (error) {
        setError(error.message);
        setData(null); // Ensure data is cleared on error
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pincode]);

  return { data, loading, error };
};

export default useFetch;
