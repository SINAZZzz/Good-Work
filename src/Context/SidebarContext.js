// Sidebar Context
import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [id, setId] = useState(0);
  const [open, setOpen] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showModalMap, setShowModalMap] = useState(false);
  const [showModalSocial, setShowModalSocial] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        id,
        setId,
        showModal,
        setShowModal,
        showModalMap,
        setShowModalMap,
        showModalSocial,
        setShowModalSocial,
        open,
        setOpen,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
