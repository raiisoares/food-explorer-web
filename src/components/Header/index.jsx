import { Container } from "./styles";
import { Brand } from "../Brand";
import { Button } from "./../Button/index";
import { ButtonIcon } from "../ButtonIcon";
import { Input } from "./../Input/index";
import { SlMenu, SlMagnifier } from "react-icons/sl";
import { FiX } from "react-icons/fi";
import { PiReceiptLight } from "react-icons/pi";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "./../../utils/roles";
import { useNavigate } from "react-router-dom";

export function Header({ menu, onSearchChange, ...rest }) {
  const { signOut } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  return (
    <Container {...rest}>
      {menu && (
        <div className="menu">
          <ButtonIcon onClick={(e) => navigate(-1)}>
            <FiX size={24} />
          </ButtonIcon>
          <h1>Menu</h1>
        </div>
      )}

      {!menu && (
        <div className="main-header">
          <ButtonIcon onClick={(e) => navigate("/menu")}>
            <SlMenu size={20} />
          </ButtonIcon>
          <div className="brand-wrapper">
            <Brand />
            {[USER_ROLE.ADMIN].includes(user.role) && <span>admin</span>}
          </div>
          <Input
            icon={SlMagnifier}
            placeholder={"Busque por pratos ou ingredientes"}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          {[USER_ROLE.ADMIN].includes(user.role) ? (
            <Button title={"Novo Prato"} onClick={(e) => navigate("/create")} />
          ) : (
            <Button icon={PiReceiptLight} title={"pedidos (0)"} />
          )}
          <ButtonIcon
            className="singOut"
            onClick={(e) => {
              signOut(), navigate("/");
            }}
          >
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SignOut">
                <path
                  id="Vector"
                  d="M21.75 12.1164L27 17.3664M27 17.3664L21.75 22.6164M27 17.3664H13M13 28.3664H6C5.73478 28.3664 5.48043 28.261 5.29289 28.0735C5.10536 27.886 5 27.6316 5 27.3664V7.36639C5 7.10118 5.10536 6.84682 5.29289 6.65929C5.48043 6.47175 5.73478 6.36639 6 6.36639H13"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </ButtonIcon>
          <ButtonIcon className="menu">
            <svg
              width="26"
              height="22"
              viewBox="0 0 26 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5 8.00023C5.5 7.44794 5.94772 7.00023 6.5 7.00023H19.5C20.0523 7.00023 20.5 7.44794 20.5 8.00023C20.5 8.55251 20.0523 9.00023 19.5 9.00023H6.5C5.94772 9.00023 5.5 8.55251 5.5 8.00023Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.5 12.0002C5.5 11.4479 5.94772 11.0002 6.5 11.0002H19.5C20.0523 11.0002 20.5 11.4479 20.5 12.0002C20.5 12.5525 20.0523 13.0002 19.5 13.0002H6.5C5.94772 13.0002 5.5 12.5525 5.5 12.0002Z"
                fill="white"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.585787 0.586016C0.960859 0.210943 1.46957 0.000228882 2 0.000228882H24C24.5304 0.000228882 25.0391 0.210943 25.4142 0.586016C25.7893 0.961089 26 1.4698 26 2.00023V21.0002C26 21.3468 25.8205 21.6687 25.5257 21.8509C25.2309 22.0331 24.8628 22.0497 24.5528 21.8947L21 20.1183L17.4472 21.8947C17.1657 22.0354 16.8343 22.0354 16.5528 21.8947L13 20.1183L9.44721 21.8947C9.16569 22.0354 8.83431 22.0354 8.55279 21.8947L5 20.1183L1.44721 21.8947C1.13723 22.0497 0.769085 22.0331 0.474269 21.8509C0.179452 21.6687 0 21.3468 0 21.0002V2.00023C0 1.4698 0.210714 0.961088 0.585787 0.586016ZM24 2.00023L2 2.00023L2 19.3822L4.55279 18.1058C4.83431 17.965 5.16569 17.965 5.44721 18.1058L9 19.8822L12.5528 18.1058C12.8343 17.965 13.1657 17.965 13.4472 18.1058L17 19.8822L20.5528 18.1058C20.8343 17.965 21.1657 17.965 21.4472 18.1058L24 19.3822V2.00023Z"
                fill="white"
              />
            </svg>
          </ButtonIcon>
        </div>
      )}
    </Container>
  );
}
