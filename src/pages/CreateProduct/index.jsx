import { Container, Content } from "./styles";
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function CreateProduct() {
    return (
        <Container>
            <Header />
            <Content>
                <main>
                    <section>
                        <h1>Novo Prato</h1>
                        <form>
                            <fieldset>
                                <label htmlFor="">Imagem do prato</label>
                                <Input />
                                <label htmlFor="">Nome</label>
                                <Input placeholder="Ex.: Salada Ceasar" />
                                <label htmlFor="">Categoria</label>
                                <Input />
                            </fieldset>

                            <fieldset>

                                <label htmlFor="">Ingredientes</label>
                                <Input />
                                <label htmlFor="">Categoria</label>
                                <Input placeholder="R$ 00,00" />
                            </fieldset>
                            <Button state="disable" title="Salvar alterações" />
                        </form>
                    </section>
                </main>
            </Content>
            <Footer />
        </Container>
    )
}
