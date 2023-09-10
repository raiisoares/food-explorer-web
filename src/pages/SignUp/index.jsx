import { Container } from "./styles"
import { Logo } from "../../components/Logo";
import { Button } from "../../components/Button";
import { ButtonText } from './../../components/ButtonText/index';
import { Input } from "../../components/Input";

export function SignUp() {
    return (
        <Container>
            <main>
                <Logo />
                <form action="">
                    <label>Seu Nome
                        <Input placeholder={"Exemplo: Maria da Silva"} />
                    </label>
                    <label>Email
                        <Input placeholder={"Exemplo: exemplo@exemplo.com.br"} />
                    </label>
                    <label>Senha
                        <Input placeholder={"No mínimo 6 caracteres"} />
                    </label>
                    <Button title={"Criar conta"} />
                </form>
                <ButtonText title={"Já tenho uma conta"} />
            </main>
        </Container>
    )
}