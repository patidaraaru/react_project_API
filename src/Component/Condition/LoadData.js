import React, { useEffect, useState } from "react";

const LoadData = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const DataLoad = setTimeout(() => {
      setData("Data loaded successfully!");
      console.log("Data loaded");
    }, 3000);
    setData("Loading...");
    return () => clearTimeout(DataLoad);
  }, []);

  return (
    <div>
      <h2>{data}</h2>
    </div>
  );
};

export default LoadData;
