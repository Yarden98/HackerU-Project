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
  const { handleUpdateCard, handleGetCard, value } = useCards();
  console.log(value.card);
  const { user } = useUser();
  const { data, errors, ...rest } = useForm(initialCardForm, cardSchema, () => {
    handleUpdateCard(value.card._id, {
      ...normalizeUser({ ...data }),
      bizNumber: value.card.bizNumber,
      user_id: value.card._id,
    });
  });

  if (value.card.user_id) {
    console.log("Its work and you will be Okey :) ");
  } else {
    console.log("null and you are fucking stupid :( ");
  }

  useEffect(() => {
    handleGetCard(id).then((data) => {
      if (user._id !== data.user_id) Navigate(ROUTES.CARDS);
      const modeledCard = mapCardToModel(data);
      rest.setData(modeledCard);
      // if (card) rest.setData(mapCardToModel(card));
    });
  }, []);

  // if (!user) return <Navigate replace to={ROUTES.CARDS} />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {value.card ? (
        <CardForm
          title="edit card"
          onSubmit={rest.onSubmit}
          onReset={rest.handleReset}
          errors={errors}
          onFormChange={rest.validateForm}
          onInputChange={rest.handleChange}
          data={data}
          to={ROUTES.CARDS}
        />
      ) : (
        "...loading"
      )}
    </Container>
  );
}
