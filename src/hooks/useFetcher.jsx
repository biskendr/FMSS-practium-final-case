import { useState, useEffect } from 'react';
import axios from 'axios';

const useSwapiData = (url) => {
  const [response, setResponse] = useState(null);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      axios
        .get(url)
        .then((response) => {
          setResponse(response.data);
          setData(response.data.results);
          setLoading(false);
        })
        .catch((error) => {
          setError(error);
          setLoading(false);
        });
    }, 750);
  }, [url]);

  return {
    response,
    setResponse,
    data,
    setData,
    loading,
    setLoading,
    error,
    setError,
  };
};

export default useSwapiData;
