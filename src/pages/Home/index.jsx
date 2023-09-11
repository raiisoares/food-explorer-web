import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";
import { Section } from "../../components/Section";

export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <Section name={"Refeições"}/>
            </Content>

            <Footer />
        </Container>
    )
}