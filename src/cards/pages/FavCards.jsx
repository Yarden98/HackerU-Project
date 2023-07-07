import React, { useCallback, useEffect } from "react";
import useCards from "../hooks/useCards";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import CardsFeedback from "../components/CardsFeedback";

export default function FavCards({ id, cardId }) {
  const { value, ...rest } = useCards();
  const { handleDeleteCard, handleGetFavCards, handleLikeCard } = rest;
  const { isLoading, error, cards } = value;
  console.log(value);
  useEffect(() => {
    handleGetFavCards();
  }, []);

  const onDeleteCard = useCallback(
    async (cardId) => {
      await handleDeleteCard(cardId);
      await handleGetFavCards();
    },
    [handleDeleteCard]
  );

  const handleLikeCardFav = useCallback(async () => {
    await handleLikeCard(id);
  }, [handleLikeCard]);

  const changeLikeStatus = useCallback(async () => {
    await handleGetFavCards();
    handleLikeCardFav(id);
  }, []);

  return (
    <Container>
      <PageHeader
        title="Favorite Cards Page"
        subtitle="Here you can find all your favorite business cards"
      />
      <CardsFeedback
        isLoading={isLoading}
        error={error}
        cards={cards}
        onDelete={onDeleteCard}
        onLike={changeLikeStatus}
      />
    </Container>
  );
}
