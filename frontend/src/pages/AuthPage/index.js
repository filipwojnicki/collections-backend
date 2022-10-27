import React from "react";
import Auth from "../../components/Auth";

import LanguageSelect from "../../common/LanguageSelect";
import ThemeMode from "../../components/ThemeMode";
import { Container } from "./AuthPage.style";
import Navbar from "../../common/NavBar";

const AuthPage = () => {
return (
  <>
    <Container>
      <ThemeMode />
    </Container>
    <Auth />
  </>
);
};

export default AuthPage;
