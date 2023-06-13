import { Grid } from "@mui/material";
import { arrayOf } from "prop-types";
import React from "react";
import cardType from "../models/cardType";
import BussinessCard from "../components/card/BussinessCard";

export default function Cards({ cards, handleDelete, handleLikeCard }) {
  const handleEdit = (id) => {
    console.log(`Card ${id} is edit`);
  };

  const handleLike = (id) => {
    console.log(`you liked ${id} card `);
  };
  console.log(cards);
  return (
    <>
      <Grid container>
        {cards.map((card) => (
          <Grid item key={card._id} xs={12} sm={6} md={4} lg={3}>
            <BussinessCard
              card={card}
              key={card._id}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleLike={handleLike}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

Cards.propTypes = {
  cards: arrayOf(cardType),
};