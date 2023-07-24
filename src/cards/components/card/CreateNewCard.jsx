import React, { useEffect } from "react";
import useCards from "../../hooks/useCards";
import { Container } from "@mui/material";
import CardForm from "./CardForm";
import useForm from "../../../forms/hooks/useForm";
import initialCardForm from "../../helpers/initialForms/initialCardForm";
import cardSchema from "../../models/joi-schema/cardSchema";
import { useUser } from "../../../users/providers/UserProvider";
import normalizeCard from "../../helpers/normalization/normalizeCard";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routers/routeModel";

export default function CreateNewCard() {
  const { user } = useUser();

  const { handleCreateCard } = useCards();
  const { data, errors, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleCreateCard({
      ...normalizeCard({ ...data }),
      user_id: user.id,
      likes: [],
    });
  });

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardForm
        title="create card"
        onSubmit={rest.onSubmit}
        onReset={rest.handleReset}
        errors={errors}
        onFormChange={rest.validateForm}
        onInputChange={rest.handleChange}
        data={data}
        to={ROUTES.CARDS}
      />
    </Container>
  );
}
