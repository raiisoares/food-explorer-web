import { Container } from "./styles";
import { Brand } from "../../components/Brand";

export function Footer() {
    return (
        <Container>
            <Brand type={"footer"} /> 
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}