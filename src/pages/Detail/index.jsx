import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Button } from "../../components/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiReceiptLight } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import sobremesa from "../../assets/sobremesa.png";
import { ButtonText } from "./../../components/ButtonText/index";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Detail() {
  const params = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }
    fetchProduct();
  }, []);

  return (
    <Container>
      <Header />
      <Content>
        <ButtonText icon={MdKeyboardArrowLeft} title="Voltar" onClick={(e) => navigate(-1)} />
        <main>
          {data && (
            <>
              <img src={sobremesa} />
              <div className="wrapper">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <div className="tags">
                  {data.ingredients.map((ingredient, index) => (
                    <Tag key={String(index)} title={ingredient.name} />
                  ))}
                </div>
                <div className="action-wrapper">
                  <div className="actionButtons">
                    <ButtonIcon>
                      <AiOutlineMinus />
                    </ButtonIcon>
                    <span className="counter">01</span>
                    <ButtonIcon>
                      <AiOutlinePlus />
                    </ButtonIcon>
                  </div>
                  <Button icon={PiReceiptLight} title="pedir R$ 25,00" />
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
