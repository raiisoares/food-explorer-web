import { useState, useEffect, useRef } from "react";
import { Container } from "./styles";
import { Card } from "../Card";
import { api } from "../../services/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export function Section({ name, category, ...rest }) {
  const carousel = useRef();
  const [products, setProducts] = useState([]);
  const [width, setWidth] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);
  const [isNavigationEnabled, setIsNavigationEnabled] = useState(true);

  const handleLeft = () => {
    // implement your logic here
  };

  const handleRight = () => {
    // implement your logic here
  };

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [products]);

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
    const handleResize = () => {
      // Atualize o slidesPerView com base na largura da tela
      if (window.innerWidth < 768) {
        setSlidesPerView(2); // Defina o número desejado de slides para versão mobile
        setIsNavigationEnabled(false); // Desativa a navegação para a versão mobile
      } else {
        setSlidesPerView(5); // Defina o número desejado de slides para versão desktop
        setIsNavigationEnabled(true); // Ativa a navegação para a versão desktop
      }
    };

    handleResize(); // Execute uma vez para definir a configuração inicial

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container {...rest}>
      <h1>{category}</h1>
      <Swiper
        modules={[A11y, Navigation]}
        spaceBetween={50}
        slidesPerView={slidesPerView}
        navigation
        freeMode={true}
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
