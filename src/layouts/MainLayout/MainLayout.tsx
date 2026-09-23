import Header from "../../components/Header/Header";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function MainLayout() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <main>
        <Outlet context={searchTerm} />
      </main>
    </>
  );
}

export default MainLayout;
