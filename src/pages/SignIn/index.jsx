import { Container } from "./styles";
import { Brand } from "../../components/Brand";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleSignIn = async () => signIn({ email, password });

  return (
    <Container>
      <main>
        <Brand type={"auth"} />
        <div className="form-wrapper">
          <h1>Faça login</h1>
          <form action="">
            <label>
              Email
              <Input
                placeholder={"Exemplo: exemplo@exemplo.com.br"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Senha
              <Input
                type="password"
                placeholder={"No mínimo 6 caracteres"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <Button title={"Entrar"} onClick={handleSignIn} />
            <Link to={"/register"}>Criar uma conta</Link>
          </form>
        </div>
      </main>
    </Container>
  );
}
