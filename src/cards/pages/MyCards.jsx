import React, { useEffect } from "react";
import useCards from "../hooks/useCards";
import PageHeader from "../../components/PageHeader";
import { Container } from "@mui/material";
import CardsFeedback from "../components/CardsFeedback";

export default function MyCards() {
  const { cards, isLoading, error, handleGetMyCard, handleDeleteCard } =
    useCards();
  useEffect(() => {
    handleGetMyCard();
  }, []);
  const handleDelet = async (id) => {
    await handleDeleteCard(id);
    handleGetMyCard();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="cards"
          subtitle="On this page you can find your bussines cards from all caregories"
        />
        <CardsFeedback
          cards={cards}
          isLoading={isLoading}
          error={error}
          handleDelete={handleDelet}
        />
      </Container>
    </div>
  );
}
