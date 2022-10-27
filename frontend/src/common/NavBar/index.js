import React from "react";
import LanguageSelect from "../../common/LanguageSelect";

import { AppBar, Grid, IconButton } from "@mui/material";
import ThemeMode from "../../components/ThemeMode";
import MenuLogout from "../../components/MenuLogout";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";

import { BoxBar, IconButtonDesign} from "./NavBar.style";
import SearchBar from "../SearchBar";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box>
      <AppBar color="secondary" position="sticky" >
        <Toolbar  >
          <Grid container align="center" justify="center" alignItems="center" >
            <Grid item xs={0} sm={3} md={2} lg={1}>
              <Typography 
                variant="h6"
                noWrap
                component="div"
                sx={{
                  display: { xs: "none", sm: "block" },
                }}
              >
                Main Page
              </Typography>
            </Grid>

            <Grid item xs={6} sm={5} md={6} lg={8}>
              <SearchBar />
            </Grid>
            <Grid item xs={6} sm={4} md={4} lg={3}>
              <BoxBar>
                <Grid
                  container
                  spacing={5}
                  align="center"
                  justify="center"
                  alignItems="center"
                >
                
                  <Grid item xs={2} sm={2} lg={1}>
                  <Link to={"/AdminPage"}>
                    <IconButtonDesign >
                      Admin Panel 
                    </IconButtonDesign>
                    </Link>
                  </Grid>

                  <Grid item xs={2} sm={1} lg={1} >
                    <ThemeMode />
                  </Grid>

                  <Grid item xs={2} sm={1} lg={1}>
                    <MenuLogout />
                  </Grid>
                </Grid>
              </BoxBar>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
