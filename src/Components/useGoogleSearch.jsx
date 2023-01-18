import { useState, useEffect } from "react";
import API_KEY from "./Keys";
import axios from "axios";

const CONTEXT_KEY = "b2c530a3dbf6b4640";

function useGoogleSearch(term) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      axios
        .get(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
        )
        .then(({ data }) => {
          setData(data);
        });
    };

    fetchData();
  }, [term]);

  return { data };
}

export default useGoogleSearch;
