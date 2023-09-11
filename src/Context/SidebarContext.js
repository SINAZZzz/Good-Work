// Sidebar Context
import { createContext, useState } from "react";

export const SidebarContext = createContext();

export const SidebarContextProvider = ({ children }) => {
  const [path, setPath] = useState();
  const [name, setName] = useState();
  const [open, setOpen] = useState(true);
  const [locationTitle, setLocationTitle] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showModalMap, setShowModalMap] = useState(false);
  const [showModalSocial, setShowModalSocial] = useState(false);

  return (
    <SidebarContext.Provider
      value={{
        name,
        setName,
        path: path,
        setPath,
        showModal,
        setShowModal,
        showModalMap,
        setShowModalMap,
        showModalSocial,
        setShowModalSocial,
        open,
        setOpen,
        locationTitle: locationTitle,
        setLocationTitle,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
};
