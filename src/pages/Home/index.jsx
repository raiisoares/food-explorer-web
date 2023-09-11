import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Card } from "../../components/Card";

export function Home(){
    return(
        <Container>
            <Header />
            
            <Content>
            <Card/>
            </Content>
            
            <Footer/>
        </Container>
    )
}