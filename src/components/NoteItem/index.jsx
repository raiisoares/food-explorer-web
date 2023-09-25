import { FiPlus, FiX } from "react-icons/fi";
import { Container, Input, Button } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <Input
        type="text"
        value={value}
        isNew={isNew}
        className="input-width"
        readOnly={!isNew}
        {...rest}
      />
      <Button
        type="button"
        onClick={onClick}
        className={isNew ? "button-add" : "button-delete"}
      >
        {isNew ? "+" : "x"}
      </Button>
    </Container>
  );
}
