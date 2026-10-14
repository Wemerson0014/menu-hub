import { useEffect, useState } from "react";
import "./MenuSection.css";
import { products as localProducts } from "../../data/products";
import type { Product } from "../../data/products";
import { supabase } from "../../utils/supabase";
import MenuCard from "../MenuCard/MenuCard";

interface MenuSectionProps {
  searchTerm: string;
}

interface DatabaseProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  image_url: string | null;
  is_available: boolean;
}

function MenuSection({ searchTerm }: MenuSectionProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data, error: queryError } = await supabase
          .from("products")
          .select("id, name, description, price, image_url, is_available")
          .eq("is_available", true)
          .order("id");

        if (queryError) {
          throw queryError;
        }

        const databaseProducts = (data ?? []) as DatabaseProduct[];

        const formattedProducts: Product[] = databaseProducts.map((product) => {
          const localProduct = localProducts.find(
            (item) => item.name === product.name,
          );

          return {
            id: product.id,
            name: product.name,
            description: product.description,
            price: Number(product.price),
            image: product.image_url ?? localProduct?.image ?? "",
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
      product.description.toLowerCase().includes(normalizedSearchTerm),
  );

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
        ) : filteredProducts.length === 0 ? (
          <h2>Nenhum produto foi encontrado com sua pesquisa.</h2>
        ) : (
          filteredProducts.map((product) => (
            <MenuCard key={product.id} product={product} />
          ))
        )}
      </div>
    </section>
  );
}

export default MenuSection;
