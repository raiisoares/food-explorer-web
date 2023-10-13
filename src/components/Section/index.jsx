import { useState, useEffect } from "react";
import { Container } from "./styles";
import { Card } from "../Card";
import { api } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
// import "swiper/css/free-mode";

export function Section({ name, category, ...rest }) {
  const [products, setProducts] = useState([]);
  const [slidesPerView, setSlidesPerView] = useState(0);
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(true);
  const [gap, setGap] = useState(0);
  const [draggable, setDraggable] = useState(true);
  const [freeMode, setFreeMode] = useState(true);
  const [center, setCenter] = useState(false);

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setSlidesPerView(2);
      setGap(120);
      setIsNavigationEnabled(false);
      setDraggable(true);
      setFreeMode(true);
      setCenter(true);
    } else {
      setSlidesPerView(4);
      setIsNavigationEnabled(true);
      setDraggable(false);
      setFreeMode(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/products", { params: { name } });
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    };

    fetchData();
  }, [name]);

  useEffect(() => {
    const handleResizeListener = () => {
      handleResize();
      console.log("Resize event triggered");
    };

    window.addEventListener("resize", handleResizeListener);

    return () => {
      window.removeEventListener("resize", handleResizeListener);
    };
  }, []);

  useEffect(() => {
    handleResize();
    console.log("Resize event triggered");
  }, []);

  return (
    <Container {...rest}>
      <h1>{category}</h1>
      <Swiper
        modules={[Navigation, A11y]}
        slidesPerView={slidesPerView}
        spaceBetween={gap}
        navigation={isNavigationEnabled}
        // grabCursor={draggable}
        freeMode={freeMode}
        loop={freeMode}
      >
        {products.map((product) => (
          <SwiperSlide key={String(product.id)}>
            <Card data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
