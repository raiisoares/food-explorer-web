import { api } from "../../services/api";
import { Container } from "./styles"
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignUp = async () => {
        if (!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Cadastro realizado com sucesso!");
                navigate("/");
            }).catch(error => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Não foi possível cadastrar.");
                }
            });
    }

    return (
        <Container>
            <main>
                <Brand type={"auth"} />
                <div className="form-wrapper">
                    <h1>Crie sua conta</h1>
                    <form action="">
                        <label>Seu Nome
                            <Input placeholder={"Exemplo: Maria da Silva"} onChange={e => setName(e.target.value)} />
                        </label>
                        <label>Email
                            <Input type="mail" placeholder={"Exemplo: exemplo@exemplo.com.br"} onChange={e => setEmail(e.target.value)} />
                        </label>
                        <label>Senha
                            <Input type="password" placeholder={"No mínimo 6 caracteres"} onChange={e => setPassword(e.target.value)} />
                        </label>
                        <Button title={"Criar conta"} onClick={handleSignUp} />
                        <Link to={"/"}>Já tenho uma conta</Link>
                    </form>
                </div>
            </main>
        </Container>
    )
}