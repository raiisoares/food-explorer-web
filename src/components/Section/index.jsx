import { useState, useEffect, useRef } from "react";
import { Container } from "./styles";
import { Card } from "../Card"
import { motion } from "framer-motion";

export function Section({ name, ...rest }) {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
    }, []);

    return (
        <Container {...rest}>
            <h1>{name}</h1>
            <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div className="inner" drag="x" dragConstraints={{right: 0, left: -width}} >
                    <Card />
                    <Card />
                    <Card />
                </motion.div>
            </motion.div>
        </Container>
    )
}