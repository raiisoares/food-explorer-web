import { Container } from "./styles"
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

export function SignUp() {
    return (
        <Container>
            <main>
                <Brand type={"auth"} />
                <div className="form-wrapper">
                    <h1>Crie sua conta</h1>
                    <form action="">
                        <label>Seu Nome
                            <Input placeholder={"Exemplo: Maria da Silva"} />
                        </label>
                        <label>Email
                            <Input type="mail" placeholder={"Exemplo: exemplo@exemplo.com.br"} />
                        </label>
                        <label>Senha
                            <Input type="password" placeholder={"No mínimo 6 caracteres"} />
                        </label>
                        <Button title={"Criar conta"} />
                        <Link to={"/"}>Já tenho uma conta</Link>
                    </form>
                </div>
            </main>
        </Container>
    )
}