import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export const useSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activePath, setActivePath] = useState("/");
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen((prevState) => !prevState);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    const links = document.querySelectorAll("#sidebar a");
    links.forEach((link) => {
      link.addEventListener("click", closeSidebar);
    });
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", closeSidebar);
      });
    };
  }, []);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return { sidebarOpen, toggleSidebar, activePath };
};
