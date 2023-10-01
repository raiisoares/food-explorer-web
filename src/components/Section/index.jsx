import { useState, useEffect, useRef } from "react";
import { Container } from "./styles";
import { Card } from "../Card";
import { motion } from "framer-motion";
import { api } from "../../services/api";

export function Section({ name, category, ...rest }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products", { params: { name } });
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, [name]);

  return (
    <Container {...rest}>
      <h1>{category}</h1>
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.6 }}
        >
          {products.map((product) => (
            <Card key={String(product.id)} data={product} />
          ))}
        </motion.div>
      </motion.div>
    </Container>
  );
}
