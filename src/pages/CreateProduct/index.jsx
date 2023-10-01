import { useState } from "react";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonUpload } from "../../components/ButtonUpload";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { SelectOptions } from "../../components/Select";
import { Link, useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { api } from "../../services/api";

export function CreateProduct() {
  const navigate = useNavigate();

  const [name, setName] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);
  const [type, setType] = useState("");

  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const options = [
    { value: "refeição", label: "Refeições" },
    { value: "sobremesa", label: "Sobremesas" },
    { value: "bebida", label: "Bebidas" },
  ];

  const handleAddIngredient = (event) => {
    event.preventDefault();
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  };

  const handleRemoveIngredient = (deleted) => {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted),
    );
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
    setType(selectedOption.value);
  };

  const create = async () => {
    try {
      await api.post("/products", {
        name,
        type,
        price,
        description,
        ingredients,
      });
      alert("Produto criado com sucesso.");
      navigate(-1);
    } catch (error) {
      console.error("Erro ao criar produto:", error);
    }
  };
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
              <fieldset className="basic-wrapper">
                <div className="img">
                  <label htmlFor="">Imagem do prato</label>
                  <ButtonUpload title="Selecione imagem" />
                </div>
                <div className="name">
                  <label htmlFor="">Nome</label>
                  <Input
                    placeholder="Ex.: Salada Ceasar"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="category">
                  <label htmlFor="">Categoria</label>
                  <SelectOptions
                    options={options}
                    value={selectedOption}
                    onChange={handleSelectChange}
                  />
                </div>
              </fieldset>

              <fieldset className="info-wrapper">
                <div className="ingredients">
                  <label htmlFor="">Ingredientes</label>
                  <div className="">
                    {ingredients.map((ingredient, index) => (
                      <NoteItem
                        key={String(index)}
                        value={ingredient}
                        onClick={() => {
                          handleRemoveIngredient(ingredient);
                        }}
                      />
                    ))}
                    <NoteItem
                      isNew
                      value={newIngredient}
                      placeholder="Nova tag"
                      onChange={(event) => setNewIngredient(event.target.value)}
                      onClick={handleAddIngredient}
                    />
                  </div>
                </div>
                <div className="price">
                  <label htmlFor="">Preço</label>
                  <Input
                    placeholder="R$ 00,00"
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
              </fieldset>
              <label htmlFor="">Descrição</label>
              <TextArea
                placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className="button-wrapper">
                <Button
                  state="disable"
                  title="Salvar alterações"
                  onClick={create}
                />
              </div>
            </form>
          </section>
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
