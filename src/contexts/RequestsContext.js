// Requests Context
import { createContext, useEffect, useState } from "react";

export const RequestsContext = createContext();

const RequestsContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [title, setTitle] = useState(" ");
  const [categoryId, setCategoryId] = useState("");
  const [Path, setPath] = useState("");

  const [price, setPrice] = useState();
  const [date, setDate] = useState();
  const [code, setCode] = useState();
  const [month, setMonth] = useState();
  const [stats, setStats] = useState();
  

  useEffect(() => {
    setTitle("تسویه");
  }, []);

  return (
    <RequestsContext.Provider
      value={{
        showModal: showModal,
        setShowModal,
        addModal: addModal,
        setAddModal,
        title: title,
        setTitle,
        price: price,
        setPrice,
        date: date,
        setDate,
        code: code,
        setCode,
        month: month,
        setMonth,
        stats: stats,
        setStats,
        categoryId: categoryId,
        setCategoryId,
        Path: Path,
        setPath,
      }}
    >
      {children}
    </RequestsContext.Provider>
  );
};

export default RequestsContextProvider;
