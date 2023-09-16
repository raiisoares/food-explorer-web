import { Container } from "./styles"
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { ButtonText } from './../../components/ButtonText/index';
import { Input } from "../../components/Input";

export function SignIn() {
    return (
        <Container>
            <main>
                <Brand type={"auth"} />
                <div className="form-wrapper">
                    <h1>Faça login</h1>
                    <form action="">
                        <label>Email
                            <Input placeholder={"Exemplo: exemplo@exemplo.com.br"} />
                        </label>
                        <label>Senha
                            <Input placeholder={"No mínimo 6 caracteres"} />
                        </label>
                        <Button title={"Entrar"} />
                        <ButtonText title={"Criar uma conta"} />
                    </form>
                </div>
            </main>
        </Container>
    )
}