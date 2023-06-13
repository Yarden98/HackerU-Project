import { Container } from "@mui/system";
import React, { useEffect } from "react";
import PageHeader from "../../../components/PageHeader";
import useCards from "../../hooks/useCards";
import CardsFeedback from "../CardsFeedback";
export default function CardsPage() {
  const { cards, isLoading, error, handleGetCards, handleDeleteCard } =
    useCards();

  useEffect(() => {
    handleGetCards();
  }, []);
  const handleDelet = async (id) => {
    await handleDeleteCard(id);
    handleGetCards();
  };
  return (
    <div>
      <Container sx={{ mt: 2 }}>
        <PageHeader
          title="cards"
          subtitle="On this page you can find all bussines cards from all caregories"
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
