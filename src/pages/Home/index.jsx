import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section";
import banner from "../../assets/bannerL.png";

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <div className="banner">
          <img src={banner} alt="" />
          <div>
            <h2>Sabores inigualáveis</h2>
            <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </div>
        <Section category={"Refeições"} name={"refeição"} />
      </Content>

      <Footer />
    </Container>
  );
}
