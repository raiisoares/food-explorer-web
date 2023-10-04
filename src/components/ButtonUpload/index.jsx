import { useState } from "react";
import { Container } from "./styles";
import { Upload } from "lucide-react";

export function ButtonUpload({ title, ...rest }) {
  return (
    <Container {...rest}>
      <Upload />
      {title}
    </Container>
  );
}
