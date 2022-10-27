import { TextField } from "@mui/material";

const StyledTextField = ({ label = "", multiline = false, type = "text"}) => {
  return (
        <TextField
          autoFocus
          margin="dense"
          id={label}
          label={label}
          multiline={multiline}
          type={type}
          fullWidth
          variant="standard"
        />
  );
};

export default StyledTextField;
