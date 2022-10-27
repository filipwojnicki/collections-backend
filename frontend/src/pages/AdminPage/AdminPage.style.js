import { Button } from "@mui/material";
import { styled } from "@mui/material/styles"

export const ButtonSyle = styled(Button)(({ theme }) => `
  background: red,
  color: ${theme.palette.mode === "dark" ? "white" : "secondary"} !important,
`);
