import { Container } from "./styles";
import { Logo } from '../Logo';

export function Footer() {
    return (
        <Container>
            <Logo type={"footer"} /> 
            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    )
}