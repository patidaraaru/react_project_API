import React, { useEffect, useState } from "react";
import CreateData from "./CreateData";

const CreateDataProvider = ({ children }) => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState("true");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        setContent(json);
        setLoading(true);
      })
      .catch((error) => console.error("Fetch error:", error));
  }, []);
  if (!loading) return <p>Loading...</p>;

  return <CreateData.Provider value={content}>{children}</CreateData.Provider>;
};

export default CreateDataProvider;
