import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import FloatingActions from "../../components/FloatingActions/FloatingActions";

function MainLayout() {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      const timer = setTimeout(() => {
        document.getElementById("cardapio")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchTerm]);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <Outlet context={searchTerm} />
      </main>
      <FloatingActions />
    </>
  );
}

export default MainLayout;
