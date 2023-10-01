import { useEffect, useState } from "react";
import Select from "react-select";

export function SelectOptions({options, ...rest}) {

  return (
    <Select {...rest}
      options={options}
      placeholder="Escolha a categoria"
      styles={{
        control: (baseStyles, state) => ({
          ...baseStyles,
          display: "flex",
          alignItems: "center",
          height: "48px",
          background: "#0D1D25",
          color: "#C4C4CC",
          border: "none",
          borderRadius: "5px",
          boxShadow: "none",
          borderColor: "none",
          outlineColor: "currentcolor",
          outlineStyle: "none",
          outlineWidth: "0px",
        }),
        singleValue: (provided, state) => ({
          ...provided,
          color: "#C4C4CC",
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          background: "#0D1D25",
          color: "#C4C4CC",
          borderRadius: "5px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: "pointer",
          background: "#0D1D25",

          "&:hover": {
            background: "#192227",
          },
        }),
      }}
    />
  );
}
