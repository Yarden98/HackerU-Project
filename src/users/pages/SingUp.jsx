import React from "react";
import useUsers from "../hooks/useUsers";
import initiaSignupForm from "../helpers/intialForms/initialSignupForm";
import signupSchema from "../models/joi-schema/signupSchema";
import useForm from "../../forms/hooks/useForm";
import UserForm from "../components/UserForm";
import { Container } from "@mui/material";
import { useUser } from "../providers/UserProvider";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routers/routeModel";

export default function SingUp() {
  const { handleSignup } = useUsers();
  const { user } = useUser();
  const { data, errors, ...rest } = useForm(
    initiaSignupForm,
    signupSchema,
    handleSignup
  );

  if (user) return <Navigate replace to={ROUTES.ROOT} />;
  return (
    <Container
      sx={{
        padding: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <UserForm
        onSubmit={rest.onSubmit}
        onReset={rest.onReset}
        validateForm={rest.validateForm}
        titil={"registration form"}
        errors={errors}
        data={data}
        onInputChange={rest.handleChange}
        setData={rest.setData}
      />
      ;
    </Container>
  );
}
