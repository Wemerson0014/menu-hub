import MenuSection from "../components/MenuSection/MenuSection";
import { useOutletContext } from "react-router-dom";

function Menu() {
  const searchTerm = useOutletContext<string>();

  return (
    <>
      <MenuSection searchTerm={searchTerm} />
    </>
  );
}

export default Menu;
