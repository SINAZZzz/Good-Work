// Modal Context
import { createContext, useState } from "react";

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showModalMap, setShowModalMap] = useState(false);
  const [showModalSocial, setShowModalSocial] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        showModal,
        setShowModal,
        showModalMap,
        setShowModalMap,
        showModalSocial,
        setShowModalSocial,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
