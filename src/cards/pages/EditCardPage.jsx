import React, { useEffect } from "react";
import CardForm from "../components/card/CardForm";
import useCards from "../hooks/useCards";
import { useUser } from "../../users/providers/UserProvider";
import useForm from "../../forms/hooks/useForm";
import { Navigate, useParams } from "react-router-dom";
import normalizeUser from "../../users/helpers/normalization/normalizeUser";
import mapCardToModel from "../helpers/normalization/mapToModel";
import { Container } from "@mui/material";
import initialCardForm from "../helpers/initialForms/initialCardForm";
import cardSchema from "../models/joi-schema/cardSchema";
import ROUTES from "../../routers/routeModel";

export default function EditCardPage() {
  const { id } = useParams();
  const { handleUpdateCard, handleGetCard, card } = useCards();

  const { user } = useUser();
  const { data, errors, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleUpdateCard(card._id, {
      ...normalizeUser({ ...data }),
      bizNumber: card.bizNumber,
      user_id: card.user_id,
    });
  });
  console.log(data);

  useEffect(() => {
    handleGetCard(id);
  }, []);

  useEffect(() => {
    console.log(card);
    if (card) rest.setData(mapCardToModel(card));
  }, [card]);

  if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {card ? (
        <CardForm
          title="edit card"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={data}
        />
      ) : (
        "...loading"
      )}
    </Container>
  );
}
