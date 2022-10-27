import { TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {Stack } from "@mui/system";

const StyledTextFieldWithClosedIcon = ({ label = "", multiline = false, type = "text", onClick }) => {
  return (
    <>
    <Stack container direction="row">
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
        <CloseIcon
          sx={{
            color: "white",
            backgroundColor: "red",
            borderRadius: "50%",
            mt: 2.5,
            "&:hover": {
              cursor: "pointer"
            }
          }}
          onClick={onClick}

        />
      </Stack>
    </>
  );
};

export default StyledTextFieldWithClosedIcon;
