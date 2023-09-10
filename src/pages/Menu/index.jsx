import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from '../../components/Input';
import { SlMagnifier } from "react-icons/sl";


export function Menu() {
    return (
        <Container>

            <Header menu={true} />
            <Content>
                <Input icon={SlMagnifier} placeholder={"Busque por pratos ou ingredientes"} />
                <button>Sair</button>
            </Content>
            <Footer />

        </Container>
    )
}