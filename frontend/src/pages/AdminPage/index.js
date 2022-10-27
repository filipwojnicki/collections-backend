import React from "react";
import Navbar from "../../common/NavBar";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import { Button, Grid, Paper, Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Box, Container } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import BlockIcon from "@mui/icons-material/Block";
import RestoreOutlinedIcon from "@mui/icons-material/RestoreOutlined";
import { ButtonSyle } from "./AdminPage.style";
import { StyledButton } from "../../common/StyledButton";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
];

const AdminPage = () => {

  return (
    <>
      <Navbar />

      <Box>
        <Container>
          <Grid xs={12}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                mt: 2,
              }}
            >
              <Grid container spacing={2} >
                <Grid item>
                  <StyledButton 
                  >
                    Delete
                  </StyledButton>
                </Grid>

                <Grid item>
                  <StyledButton
                    startIcon={<PersonAddAltIcon />}
                  >
                    Add Admin
                  </StyledButton>
                </Grid>

                <Grid item>
                  <StyledButton
                    startIcon={<BlockIcon />}
                  >
                    Block User
                  </StyledButton>
                </Grid>

                <Grid item>
                  <StyledButton
                    startIcon={<RestoreOutlinedIcon />}
                  >
                    UnBlock User
                  </StyledButton>
                </Grid>
              </Grid>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                mt: 2,
                height: 430
              }}
            >
              <Typography variant="h4" sx={{ textTransform: "capitalize" }}>
                Users
              </Typography>

              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
              />
            </Paper>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default AdminPage;
