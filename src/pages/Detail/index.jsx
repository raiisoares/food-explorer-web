import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Tag } from "../../components/Tag";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Button } from "../../components/Button";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { PiReceiptLight } from "react-icons/pi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import sobremesa from "../../assets/sobremesa.png"
import { ButtonText } from './../../components/ButtonText/index';

export function Detail() {
    return (
        <Container>
            <Header />
            <Content>
                <ButtonText icon={MdKeyboardArrowLeft} title="Voltar" />
                <main>
                    <img src={sobremesa} />
                    <div className="wrapper">
                        <h2>Salada Ravanello</h2>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.</p>
                        <div className="tags">
                            <Tag title="alface" />
                            <Tag title="cebola" />
                            <Tag title="pão naan" />
                            <Tag title="pepino" />
                            <Tag title="rabanete" />
                            <Tag title="tomate" />
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
                </main>
            </Content>
            <Footer />
        </Container>
    )
}