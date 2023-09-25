import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonUpload } from "../../components/ButtonUpload";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { SelectOptions } from "../../components/Select";

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
                <ButtonUpload title="Selecione imagem" />
                <label htmlFor="">Nome</label>
                <Input placeholder="Ex.: Salada Ceasar" />
                <label htmlFor="">Categoria</label>
                <SelectOptions></SelectOptions>
              </fieldset>

              <fieldset>
                <label htmlFor="">Ingredientes</label>
                <div className="items-wrapper">
                  {/* <NoteItem isNew placeholder="teste"/> */}
                  <NoteItem placeholder="teste" value="teste" />
                </div>
                <label htmlFor="">Preço</label>
                <Input placeholder="R$ 00,00" />
                <label htmlFor="">Descrição</label>
                <TextArea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"></TextArea>
              </fieldset>
              <Button state="disable" title="Salvar alterações" />
            </form>
          </section>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
