import { Container } from "./styles"
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";

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
                            <Input type="password" placeholder={"No mínimo 6 caracteres"} />
                        </label>
                        <Button title={"Entrar"} />
                        <Link to={"/register"}>Criar uma conta</Link>
                    </form>
                </div>
            </main>
        </Container>
    )
}