import { useState, useEffect, useRef } from "react";
import { Container } from "./styles";
import { Card } from "../Card";
import { motion } from "framer-motion";

export function Section({ name, ...rest }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <Container {...rest}>
      <h1>{name}</h1>
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
          <Card />
          <Card />
          <Card />
        </motion.div>
      </motion.div>
    </Container>
  );
}
