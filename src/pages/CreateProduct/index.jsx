import { useState, useEffect } from "react";
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

  const [price, setPrice] = useState(0.0);
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null);

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

  const handleImageAvatar = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    const imgPreview = URL.createObjectURL(file);
    setImage(imgPreview);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    document.getElementById("uploadInput").click();
  };

  const create = async () => {
    if (
      name === "" ||
      type === "" ||
      description === "" ||
      price === 0 ||
      ingredients.length === 0 ||
      image === null
    )
      return alert("Todos os campos são obrigatórios");

    try {
      const createProductResponse = await api.post("/products", {
        name,
        type,
        description,
        price,
        ingredients,
      });

      const fileUploadForm = new FormData();
      fileUploadForm.append("image", imageFile);

      await api.patch(
        `/products/${createProductResponse.data}/image`,
        fileUploadForm,
      );

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
                  <label htmlFor="uploadInput">Imagem do prato</label>
                  <ButtonUpload
                    title={
                      image === null
                        ? "Selecione a imagem do prato"
                        : "Imagem já selecionada"
                    }
                    onClick={handleButtonClick}
                    tabIndex="-1"
                  />
                  <input
                    type="file"
                    id="uploadInput"
                    style={{ display: "none" }}
                    onChange={handleImageAvatar}
                  />
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
                  <div className="ingredients-wrapper">
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
                    onChange={(e) => {
                      const inputValue = e.target.value;
                      setPrice(parseFloat(inputValue).toFixed(2));
                    }}
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
                  onClick={(e) => {
                    e.preventDefault();
                    create();
                  }}
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
