import { FiPlus, FiX } from "react-icons/fi";
import { Container, Button } from "./styles";

export function NoteItem({ isNew, value, onClick, ...rest }) {
  return (
    <Container isNew={isNew}>
      <input
        type="text"
        value={value}
        isNew={isNew}
        style={{ width: isNew ? "7rem" : `${value.length}ch` }}
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
