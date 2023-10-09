import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { SlMagnifier } from "react-icons/sl";

export function Menu() {
  const { signOut, user } = useAuth();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSignOut = () => {
    signOut();
    navigate("/");
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
          onChange={(e) => setSearch(e.target.value)}
        />
        {search === "" && (
          <div className="buttons">
            {[USER_ROLE.ADMIN].includes(user.role) && (
              <button onClick={handleNewProduct}>Novo Prato</button>
            )}
            <button onClick={handleSignOut}>Sair</button>
          </div>
        )}
        {search !== "" && <Section category={"Resultado"} name={search} />}
      </Content>
      <Footer />
    </Container>
  );
}
