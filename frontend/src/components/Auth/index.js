import React, {useState} from "react";
import Login from "./Login";
import Registration from "./Register";

const Auth = () => {
    const [authorisation, setAuthorisation] = useState("signin");

    const changeAuthorisation = (authorisation) => {
        setAuthorisation(authorisation);
    };


    if (authorisation === "signup") {
        return <Registration changeAuth={changeAuthorisation} />;
    }

    return <Login changeAuth={changeAuthorisation} />;
};

export default Auth;
