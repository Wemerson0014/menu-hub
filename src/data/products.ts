import roastedChicken from "../assets/roasted-chicken.webp";
import chickenWings from "../assets/grilled_chicken_wings.jpg";
import ribs from "../assets/ribs.webp";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Frango Assado",
    description: "Temperado com ervas e assado lentamente",
    price: 60,
    image: roastedChicken,
    category: "Assados",
  },
  {
    id: 2,
    name: "Costelinha",
    description: "Crocante por fora e macia por dentro.",
    price: 80,
    image: ribs,
    category: "Assados",
  },
  {
    id: 3,
    name: "Asinha Assada",
    description: "Bem douradas e cheias de sabor.",
    price: 50,
    image: chickenWings,
    category: "Assados",
  },
];
