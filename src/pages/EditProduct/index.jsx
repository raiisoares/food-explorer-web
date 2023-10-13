import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ButtonUpload } from "../../components/ButtonUpload";
import { TextArea } from "../../components/TextArea";
import { NoteItem } from "../../components/NoteItem";
import { SelectOptions } from "../../components/Select";
import { ChevronLeft } from "lucide-react";
import { api } from "../../services/api";

export function EditProduct() {
  const navigate = useNavigate();
  const params = useParams();

  const [data, setData] = useState(null);

  const [name, setName] = useState("");

  const [selectedOption, setSelectedOption] = useState(null);
  const [type, setType] = useState("");

  const [price, setPrice] = useState(0);
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

  const handleProductImage = (event) => {
    const file = event.target.files[0];
    setImageFile(file);

    const imgPreview = URL.createObjectURL(file);
    setImage(imgPreview);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    document.getElementById("uploadInput").click();
  };

  const update = async () => {
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
      const editProductResponse = await api.put(`/products/${params.id}`, {
        name,
        type,
        description,
        price,
        ingredients,
      });

      const fileUploadForm = new FormData();
      fileUploadForm.append("image", imageFile);

      await api.patch(
        `/products/${editProductResponse.data.id}/image`,
        fileUploadForm,
      );

      alert("Produto editado com sucesso.");
      navigate(-1);
    } catch (error) {
      console.error("Erro ao editar produto:", error);
    }
  };

  const remove = async () => {
    try {
      await api.delete(`/products/${params.id}`);
      alert("Produto excluído com sucesso.");
      navigate(-1);
    } catch (error) {
      console.error("Erro ao excluir produto:", error);
    }
  };

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }
    fetchProduct();
  }, []);

  useEffect(() => {
    if (data) {
      setName(data.name);
      setPrice(parseFloat(data.price).toFixed(2));
      setType(data.type);
      setIngredients(data.ingredients);
      setDescription(data.description);
      setImage(data.image);
      const selected = options.find((option) => option.value === data.type);
      setSelectedOption(selected);
    }
  }, [data]);
  return (
    <Container>
      <Header />
      <Content>
        {data && (
          <>
            <main>
              <Link to="/">
                <ChevronLeft />
                Voltar
              </Link>
              <section>
                <h1>Editar Prato</h1>
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
                        onChange={handleProductImage}
                      />
                    </div>
                    <div className="name">
                      <label htmlFor="">Nome do Prato</label>
                      <Input
                        placeholder="Ex.: Salada Ceasar"
                        value={name}
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
                            value={
                              ingredient.name ? ingredient.name : ingredient
                            }
                            onClick={() => {
                              handleRemoveIngredient(ingredient);
                            }}
                          />
                        ))}
                        <NoteItem
                          isNew
                          value={newIngredient}
                          placeholder="Nova tag"
                          onChange={(event) =>
                            setNewIngredient(event.target.value)
                          }
                          onClick={handleAddIngredient}
                        />
                      </div>
                    </div>
                    <div className="price">
                      <label htmlFor="">Preço</label>
                      <Input
                        placeholder="R$ 00,00"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    </div>
                  </fieldset>
                  <label htmlFor="">Descrição</label>
                  <TextArea
                    placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  >
                    {description}
                  </TextArea>
                  <div className="button-wrapper">
                    <Button
                      className="remove-button"
                      title="Excluir prato"
                      onClick={(e) => {
                        e.preventDefault();
                        remove();
                      }}
                    />
                    <Button
                      title="Salvar alterações"
                      onClick={(e) => {
                        e.preventDefault();
                        update();
                      }}
                    />
                  </div>
                </form>
              </section>
            </main>
          </>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
