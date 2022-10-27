import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SendIcon from "@mui/icons-material/Send";

import { StyledButton } from "../../common/StyledButton";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { Container } from "@mui/system";
import StyledTextField from "../../common/StyledTextField";
import StyledTextFieldWithClosedIcon from "../../common/StyledTextFieldWithClosedIcon";

/* - 3 integer fields,
 - 3 string fields, 
 - 3 multiline text fields,
 - 3 boolean checkboxes, 
 - 3 date fields */

const AddCollection = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [selectField, setSelectField] = React.useState("");

  const [customFields, setCustomFields] = React.useState([
    { type: "String", count: 0 },
    { type: "Text", count: 0 },
    { type: "Integer", count: 0 },
    { type: "Boolean", count: 0 },
    { type: "Date", count: 0 },
  ]);

  const onSelectCustomFields = (value) => {
    const tempCustomFields = [...customFields];

    const fieldIndex = customFields.findIndex((field) => field.type === value);

    if (tempCustomFields[fieldIndex].count < 3) {
      tempCustomFields[fieldIndex].count += 1;
    }

    setCustomFields(tempCustomFields);
  };

  const RedCloseIconClose = (value) =>{
    const tempCustomFields = [...customFields];

    const fieldIndex = customFields.findIndex((field) => field.type === value);

    tempCustomFields[fieldIndex].count -= 1;

    setCustomFields(tempCustomFields); 
  }

  const generateTextField = (field, index) => {
    if (field.count <= 0) {
      return ;
    }

    let element = null;

    switch (field.type) {
      case "String":
        element = (
          <StyledTextFieldWithClosedIcon
            key={index}
            label="String"
            onClick={() => RedCloseIconClose(field.type)}
          />
        );
        break;

      case "Text":
        element = (
          <StyledTextFieldWithClosedIcon
            key={index}
            label="Text"
            onClick={() => RedCloseIconClose(field.type)}
          />
        );
        break;

      case "Integer":
        element = (
          <StyledTextFieldWithClosedIcon
            key={index}
            label="Integer"
            onClick={() => RedCloseIconClose(field.type)}
          />
        );
        break;

      case "Boolean":
        element = (
          <StyledTextFieldWithClosedIcon
            key={index}
            label="Boolean"
            onClick={() => RedCloseIconClose(field.type)}
          />
        );
        break;

      case "Date":
        element = (
          <StyledTextFieldWithClosedIcon
            key={index}
            label="Date"
            onClick={() => RedCloseIconClose(field.type)}
          />
        );
        break;
    }

    const elements = [];

    for (let i = 0; i < field.count; i++) {
      elements.push(element);
    }

    return elements;
  };

  return (
    <>
      <StyledButton onClick={handleOpen}>Add new Collection</StyledButton>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="create-collection"
        maxWidth="sm"
        fullWidth={true}
      >
        <DialogTitle>
          <Typography id="create-collection" variant="h6" component="h2">
            Add new collection
          </Typography>
        </DialogTitle>
        <DialogContent>
          <Box>
            <Container>
              <form>
                <StyledTextField label="name" />

                <StyledTextField
                  label="description"
                  multiline={true}
                  type="text"
                />

                    <FormControl fullWidth sx={{ marginTop: 3, marginBottom: 3 }}>
                      <InputLabel id="topic">Topic</InputLabel>
                      <Select labelId="topic" id="topic" label="topic">
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                    </FormControl>
                    <Grid container>
                      <Grid item xs={2}>
                        <StyledButton
                         onClick={() => {
                          onSelectCustomFields(selectField);
                        }}
                        >
                          Add 
                        </StyledButton>
                      </Grid>
                      <Grid item xs={10}>
                      <FormControl fullWidth>
                      <InputLabel id="custom-field">Custom field</InputLabel>
                      <Select
                        labelId="custom-field"
                        id="custom-field"
                        label="Custom field"
                        onChange={(event) => {
                          setSelectField(event.target.value);
                        }}
                      >
                        {customFields.map((field, index) => {
                          return (
                            <MenuItem key={index} value={field.type}>
                              {field.type}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Grid>

                </Grid>

                {customFields.map(generateTextField)}

                <Grid container mt={2}>
                  <Grid item xs={6}>
                    <Button variant="contained" component="label">
                      Upload
                      <input hidden accept="image/*" multiple type="file" />
                    </Button>
                  </Grid>
                  <Grid item xs={6} sx={{ textAlign: "right" }}>
                    <Button variant="contained" endIcon={<SendIcon />}>
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Container>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default AddCollection;
