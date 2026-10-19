import { useEffect, useState } from "react";
import "./MenuSection.css";
import { products as localProducts } from "../../data/products";
import type { Product } from "../../data/products";
import { supabase } from "../../utils/supabase";
import MenuCard from "../MenuCard/MenuCard";

interface MenuSectionProps {
  searchTerm: string;
  limit?: number;
}

interface DatabaseProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  is_available: boolean;
  category: string;
}

function MenuSection({ searchTerm, limit }: MenuSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error: queryError } = await supabase
          .from("products")
          .select(
            "id, name, description, price, image_url, is_available, category",
          )
          .eq("is_available", true)
          .order("id");

        if (queryError) {
          throw queryError;
        }

        const databaseProducts = (data ?? []) as DatabaseProduct[];

        const formattedProducts: Product[] = databaseProducts.map((product) => {
          const localProduct = localProducts.find(
            (item) =>
              item.name === product.name ||
              (item.name === "Costelinha" &&
                product.name === "Costelinha de porco"),
          );

          return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: Number(product.price),
            image: product.image_url ?? localProduct?.image ?? "",
            category: product.category,
          };
        });

        setProducts(formattedProducts);
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
        setError("Não foi possível carregar o cardápio.");
      } finally {
        setIsLoading(false);
      }
    }

    void fetchProducts();
  }, []);

  const normalizedSearchTerm = searchTerm.toLowerCase();

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(normalizedSearchTerm) ||
      product.description.toLowerCase().includes(normalizedSearchTerm) ||
      product.category.toLowerCase().includes(normalizedSearchTerm),
  );

  const featuredNames = [
    "Frango Assado",
    "Costelinha de porco",
    "Asinha Assada",
  ];

  const featuredProducts = filteredProducts.filter((product) =>
    featuredNames.includes(product.name),
  );

  const displayedProducts =
    limit !== undefined && searchTerm.trim() === ""
      ? featuredProducts
      : filteredProducts;

  const categories = [
    ...new Set(displayedProducts.map((product) => product.category)),
  ];

  return (
    <section id="cardapio" className="menu-section">
      <div className="menu-header">
        <h2>Escolha seu favorito</h2>
        <p>
          Assados, carnes recheadas, acompanhamentos e outras delícias
          preparadas para você.
        </p>
      </div>

      <div className="menu-grid">
        {isLoading ? (
          <p>Carregando cardápio...</p>
        ) : error ? (
          <p role="alert">{error}</p>
        ) : displayedProducts.length === 0 ? (
          <h2>Nenhum produto foi encontrado com sua pesquisa.</h2>
        ) : (
          categories.map((category) => (
            <div key={category} className="menu-category">
              <h3>{category}</h3>

              <div className="menu-grid">
                {displayedProducts
                  .filter((product) => product.category === category)
                  .map((product) => (
                    <MenuCard key={product.id} product={product} />
                  ))}
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default MenuSection;
