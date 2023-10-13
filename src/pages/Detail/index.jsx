import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Button } from "../../components/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiReceiptLight } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { ButtonText } from "./../../components/ButtonText/index";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import imagePlaceholder from "../../assets/food-placeholder.jpg";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from "../../hooks/auth";

export function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [data, setData] = useState(null);
  const [image, setImage] = useState(null);

  const [price, setPrice] = useState(0);
  const [counter, setCounter] = useState(1);

  const handlePlusButton = async () => {
    if (data) {
      setCounter((prevState) => prevState + 1);
      setPrice((prevState) => parseFloat((prevState + data.price).toFixed(2)));
    }
  };

  const handleMinusButton = async () => {
    if (data && counter > 1) {
      setCounter((prevState) => prevState - 1);
      setPrice((prevState) => parseFloat((prevState - data.price).toFixed(2)));
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
      const imageUrl = data.image
        ? `${api.defaults.baseURL}/files/${data.image}`
        : imagePlaceholder;
      setImage(imageUrl);
      setPrice(data.price);
    }
  }, [data]);

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText
          icon={MdKeyboardArrowLeft}
          title="Voltar"
          onClick={(e) => navigate(-1)}
        />
        <main>
          {data && (
            <>
              <img src={image} />
              <div className="wrapper">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="tags">
                  {data.ingredients.map((ingredient, index) => (
                    <Tag
                      key={String(index)}
                      title={ingredient.name ? ingredient.name : ingredient}
                    />
                  ))}
                </div>
                <div className="action-wrapper">
                  {[USER_ROLE.CUSTOMER].includes(user.role) && (
                    <div className="actionButtons">
                      <ButtonIcon onClick={handleMinusButton}>
                        <AiOutlineMinus />
                      </ButtonIcon>
                      <span className="counter">{counter}</span>
                      <ButtonIcon onClick={handlePlusButton}>
                        <AiOutlinePlus />
                      </ButtonIcon>
                    </div>
                  )}
                  {[USER_ROLE.ADMIN].includes(user.role) ? (
                    <Button
                      title={`Editar prato`}
                      onClick={(e) => navigate(`/edit/${data.id}`)}
                    />
                  ) : (
                    <Button icon={PiReceiptLight} title={`pedir R$ ${price}`} />
                  )}
                </div>
              </div>
            </>
          )}
        </main>
      </Content>
      <Footer />
    </Container>
  );
}
