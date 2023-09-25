import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonUpload } from "../../components/ButtonUpload";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { SelectOptions } from "../../components/Select";
import { Link } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

export function CreateProduct() {
  return (
    <Container>
      <Header />
      <Content>
        <main>
          <Link to="/">
            <ChevronLeft />
            Voltar
          </Link>
          <section>
            <h1>Novo Prato</h1>
            <form>
              <fieldset>
                <label htmlFor="">Imagem do prato</label>
                <ButtonUpload title="Selecione imagem" />
                <label htmlFor="">Nome</label>
                <Input placeholder="Ex.: Salada Ceasar" />
                <label htmlFor="">Categoria</label>
                <SelectOptions />
              </fieldset>

              <fieldset>
                <label htmlFor="">Ingredientes</label>
                <div className="items-wrapper">
                  <NoteItem placeholder={"teste"} value={"teste"} />
                  <NoteItem isNew={true} placeholder="teste" />
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
