import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';
import { SlMagnifier } from "react-icons/sl";
import { FiX } from "react-icons/fi";

export function Menu() {
    return (
        <Container>

            <Header menu={true} icon={FiX} />
            <Content>
                <Input icon={SlMagnifier} placeholder={"Busque por pratos ou ingredientes"} />
                <button>Sair</button>
            </Content>
            <Footer />

        </Container>
    )
}