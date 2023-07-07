import { Grid, IconButton } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/cardType";
import BussinessCard from "../components/card/BussinessCard";
import { Navigate } from "react-router-dom";
import useCards from "../hooks/useCards";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Cards({
  cards,
  handleDelete,
  handleLike,
  changeLikeStatus,
}) {
  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BussinessCard
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleLike={handleLike}
              onLike={changeLikeStatus}
            />
          </Grid>
        ))}
      </Grid>
      <IconButton
        sx={{ marginLeft: "90%", xxs: "none", xs: "none", md: "block" }}
      >
        <AddCircleIcon sx={{ fontSize: 50 }} color="primary" />
      </IconButton>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};
