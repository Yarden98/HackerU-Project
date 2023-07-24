import { Container } from "@mui/material";
import React from "react";
import UserForm from "../components/UserForm";
import useForm from "../../forms/hooks/useForm";
import { useUser } from "../providers/UserProvider";

export default function hellou() {
  const { user } = useUser;
  return (
    <Container>
      <UserForm />
    </Container>
  );
}
