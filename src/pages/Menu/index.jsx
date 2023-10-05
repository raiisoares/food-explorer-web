import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { SlMagnifier } from "react-icons/sl";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

export function Menu() {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut();
    navigate(-1);
  };

  const handleNewProduct = () => {
    navigate("/create");
  };

  return (
    <Container>
      <Header menu={true} />
      <Content>
        <Input
          icon={SlMagnifier}
          placeholder={"Busque por pratos ou ingredientes"}
        />
        <div className="buttons">
          <button onClick={handleNewProduct}>Novo Prato</button>
          <button onClick={handleSignOut}>Sair</button>
        </div>
      </Content>
      <Footer />
    </Container>
  );
}
