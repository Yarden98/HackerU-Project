import React from "react";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";

import { Typography } from "@mui/material";

export default function CardsFeedback({
  isLoading,
  error,
  cards,
  handleDelete,
  onLike,
}) {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && cards.length == 0)
    return (
      <Typography m={2}>
        Oops... it seems there are no business cards to display
      </Typography>
    );
  if (cards)
    return <Cards cards={cards} handleDelete={handleDelete} onLike={onLike} />;
  return null;
}

CardsFeedback.defultProps = {
  onLike: () => {},
};
