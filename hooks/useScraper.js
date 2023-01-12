import axios from "axios";
import { useEffect, useState } from "react";

const useScraper = (url) => {
  const [devices, setDevices] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const scrapeDevices = async () => {
    try {
      setLoading(true);
      const res = await axios.get(url);
      setDevices(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    scrapeDevices();
  }, []);

  return { devices, isLoading };
};

export default useScraper;
