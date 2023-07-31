import { Container } from "@mui/material";
import React from "react";
import UserForm from "../components/UserForm";
import { useUser } from "../providers/UserProvider";


export default function EditCardPage() {
  const { user } = useUser;
  return (
    <Container >
      <UserForm />
    </Container>
  );
}
