import { Container } from "./styles";
import { Button } from "../Button";
import { ButtonIcon } from "../ButtonIcon";
import imagePlaceholder from "../../assets/food-placeholder.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function Card({ data, ...rest }) {
  const navigate = useNavigate();
  const [price, setPrice] = useState(data.price);
  const [counter, setCounter] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const imageUrl = data.image
    ? `${api.defaults.baseURL}/files/${data.image}`
    : imagePlaceholder;
  const [image, setImage] = useState(imageUrl);

  async function showDetail(id) {
    navigate(`/detail/${id}`);
  }

  const handleFavorite = async () => {
    setIsFavorite(!isFavorite);
  };

  const handlePlusButton = async () => {
    setCounter((prevState) => prevState + 1);
    setPrice((prevState) => prevState + data.price);
  };

  const handleMinusButton = async () => {
    if (counter > 1) {
      setCounter((prevState) => prevState - 1);
      setPrice((prevState) => prevState - data.price);
    }
  };

  return (
    <Container {...rest}>
      <div className="fav" onClick={handleFavorite}>
        {isFavorite ? (
          <ButtonIcon>
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6997 22.704L23.0754 12.478C25.3788 9.95304 25.7145 5.82477 23.5384 3.18621C22.9926 2.52129 22.3283 1.9847 21.586 1.60925C20.8437 1.23379 20.0391 1.02735 19.2211 1.00254C18.4032 0.977725 17.5893 1.13506 16.829 1.46493C16.0687 1.7948 15.3781 2.29028 14.7993 2.9211L13.0399 4.85267L11.5236 3.18621C9.2086 0.673905 5.4236 0.30779 3.00443 2.68123C2.39479 3.27646 1.90282 4.00102 1.55859 4.81063C1.21435 5.62024 1.02508 6.4979 1.00233 7.38999C0.979577 8.28208 1.12383 9.16986 1.42627 9.99908C1.72872 10.8283 2.183 11.5816 2.76136 12.2129L12.3801 22.704C12.5557 22.8936 12.7928 23 13.0399 23C13.287 23 13.5241 22.8936 13.6997 22.704Z"
                fill="#E1E1E6"
                stroke="#E1E1E6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ButtonIcon>
        ) : (
          <ButtonIcon>
            <svg
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.431 0.547789C17.3245 0.160119 18.2845 -0.0261067 19.2515 0.00322722C20.2184 0.0325601 21.1665 0.276652 22.0374 0.71713C22.9076 1.15726 23.68 1.78296 24.3106 2.5511C26.8405 5.6197 26.4109 10.3056 23.8142 13.1522L23.8125 13.154L14.4368 23.38L13.6996 22.7041L14.4335 23.3835C14.0785 23.767 13.5797 24.0002 13.0399 24.0002C12.5001 24.0002 12.0013 23.767 11.6463 23.3835L11.6431 23.38L2.02427 12.8889L2.02403 12.8886C1.35437 12.1577 0.832743 11.2904 0.48681 10.342C0.140901 9.39356 -0.0232599 8.3808 0.00265199 7.36472C0.0285639 6.34864 0.244109 5.34672 0.638319 4.41957C1.03241 3.49272 1.59804 2.65724 2.30497 1.96679C5.18795 -0.860732 9.62203 -0.352917 12.259 2.50881L12.2632 2.51343L12.2632 2.51344L13.0403 3.36745L14.06 2.24794L14.0625 2.24526C14.7328 1.51465 15.5378 0.935316 16.431 0.547789ZM13.0399 21.9441L22.3366 11.8042C22.3369 11.8039 22.3373 11.8035 22.3376 11.8032C24.3465 9.60003 24.588 6.03087 22.7669 3.8227L22.7654 3.82087C22.3047 3.25957 21.7488 2.81242 21.1347 2.50182C20.5209 2.19139 19.8597 2.0226 19.1908 2.00231C18.5219 1.98202 17.8541 2.11046 17.227 2.38253C16.6001 2.65453 16.0243 3.06573 15.5373 3.59614C15.5369 3.59655 15.5365 3.59697 15.5361 3.59739L13.7792 5.52629C13.5896 5.7344 13.3211 5.85297 13.0396 5.8529C12.7582 5.85283 12.4897 5.73411 12.3003 5.5259L10.7861 3.86185C8.79329 1.70132 5.65945 1.47753 3.70476 3.39528L3.70304 3.39697L3.70304 3.39697C3.19108 3.89682 2.77308 4.51016 2.47886 5.20215C2.1846 5.89422 2.02159 6.64762 2.002 7.41571C1.98241 8.18381 2.10676 8.94661 2.36574 9.65666C2.62465 10.3665 3.0115 11.0057 3.49845 11.5373C3.49853 11.5374 3.49861 11.5375 3.49869 11.5376L13.0399 21.9441Z"
                fill="white"
              />
            </svg>
          </ButtonIcon>
        )}
      </div>
      <img src={image} alt={data.name} srcSet="" />
      <button className="details" onClick={(e) => showDetail(data.id)}>
        <span>{data.name}</span>
        <MdKeyboardArrowRight size={20} />
      </button>
      <p>{data.description}</p>
      <span>R$ {price}</span>
      <div>
        <div className="actionButtons">
          <ButtonIcon onClick={handleMinusButton}>
            <AiOutlineMinus />
          </ButtonIcon>
          <span className="counter">{counter}</span>
          <ButtonIcon onClick={handlePlusButton}>
            <AiOutlinePlus />
          </ButtonIcon>
        </div>
        <Button title={"incluir"} />
      </div>
    </Container>
  );
}
