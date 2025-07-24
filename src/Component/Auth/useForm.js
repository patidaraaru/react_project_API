import { useEffect, useState } from "react";

const useForm = (initialValues) => {
  const [store, setStore] = useState(() => {
    const getData = localStorage.getItem("storeData");
    if (!getData) return [];
    return JSON.parse(getData);
  });

  console.log(store);
  useEffect(() => {
    localStorage.setItem("storeData", JSON.stringify(store));
  }, [store]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStore((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", store);
    setStore(initialValues);
  };

  return { store, handleChange, handleSubmit };
};

export default useForm;
