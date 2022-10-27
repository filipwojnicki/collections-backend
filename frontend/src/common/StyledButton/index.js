import { Button } from "@mui/material";

export const StyledButton = ({ children, startIcon, onClick }) => (
  <Button
    color = "secondary"
    startIcon={startIcon}
    onClick={onClick}
    variant="outlined"
    sx={{
      color: (theme) => (theme.palette.mode === "dark" ? "white" : "secondary"),
      border: (theme) =>
        theme.palette.mode === "dark" ? "1px solid white" : "1px solid secondary",
    
    }}
    
  >
    {children}
  </Button>
);
