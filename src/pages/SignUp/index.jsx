import { Container } from "./styles"
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { ButtonText } from './../../components/ButtonText/index';
import { Input } from "../../components/Input";

export function SignUp() {
    return (
        <Container>
            <main>
                <Brand type={"auth"} />
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