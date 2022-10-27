import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { ChangeAuth, Container, Form, Input, LoginText } from "./Auth.style";

import { useTranslation } from 'react-i18next';

const Login = (props) => {
const { t, i18n } = useTranslation();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (
        <Container>
            <LoginText>{t('Welcome to React')}</LoginText>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ChangeAuth onClick={() => props.changeAuth('signup')}>
                    Zarejestruj się
                </ChangeAuth>
                <Input
                    id="outlined-basic"
                    label="Mail"
                    variant="outlined"
                    placeholder="e.g. jankowalski@gmail.com"
                    {...register("mail", { required: true })}
                />
                {errors.mail && <span>This field is required</span>}
                <Input
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    {...register("password", {
                        required: true,
                        minLength: {
                            value: 6,
                            message: "Min length is 6 for password",
                        },
                    })}
                />
                {errors.password?.message}
                <Link to={"/MainPage"}>
                    <Input type="submit" />
                </Link>
                
            </Form>
        </Container>
    );
};

export default Login;
