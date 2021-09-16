import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isSidebarOpen, setisSidebarOpen] = useState(false);
  const [isSModalOpen, setisSModalOpen] = useState(false);

  const openSidebar = () => {
    setisSidebarOpen(true);
  };
  const closeSidebar = () => {
    setisSidebarOpen(false);
  };
  const openModal = () => {
    setisSModalOpen(true);
  };
  const closeModal = () => {
    setisSModalOpen(false);
  };

  return (
    <AppContext.Provider
      value={{
        isSModalOpen,
        isSidebarOpen,
        openModal,
        openSidebar,
        closeModal,
        closeSidebar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext };
