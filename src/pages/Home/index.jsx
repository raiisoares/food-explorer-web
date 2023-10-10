import { useState } from "react";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import banner from "../../assets/bannerL.png";

export function Home() {
  const [search, setSearch] = useState("");

  return (
    <Container>
      <Header onSearchChange={setSearch} />

      <Content>
        <div className="banner">
          <img src={banner} alt="" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        {search === "" && (
          <>
            <Section category={"Refeições"} name={"refeição"} />
            <Section category={"Bebidas"} name={"bebida"} />
            <Section category={"Sobremesas"} name={"sobremesa"} />
          </>
        )}
        {search !== "" && <Section category={"Resultado"} name={search} />}
      </Content>

      <Footer />
    </Container>
  );
}
