import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import { ChangeAuth, Container, Form, Input, LoginText } from "./Auth.style";

const Registration = (props) => {
    
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
            <LoginText>Zarejestruj się</LoginText>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <ChangeAuth onClick={() => props.changeAuth('signin')}>
                    Zaloguj się
                </ChangeAuth>
                <Input
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        placeholder="e.g. jankowalski@gmail.com"
                        {...register("name", { required: true })}
                />
                <Input
                        id="outlined-basic"
                        label="Surname"
                        variant="outlined"
                        placeholder="e.g. jankowalski@gmail.com"
                        {...register("surname", { required: true })}
                />
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

export default Registration;
