import { Container } from "./styles";

export function ButtonIcon({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
