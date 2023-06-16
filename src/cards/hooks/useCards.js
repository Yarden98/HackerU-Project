import { useCallback, useMemo, useState } from "react";
import {
  changeLikeStatus,
  deleteCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApiService";
import useAxios from "../../hooks/useAxios";
import { useSnack } from "../../provider/SnackbarProvider";
import { useUser } from "../../users/providers/UserProvider";

export default function useCards() {
  const [cards, setCards] = useState(null);
  const [card, setCard] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useAxios();
  const snack = useSnack();
  const user = useUser();

  const requestStatus = (loading, errorMessage, cards, card = null) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCard = useCallback(async (id) => {
    try {
      const card = await getCard(id);
      setLoading(false);
      console.log(card);
      setCard(card);
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, []);

  const handleGetCards = useCallback(async () => {
    try {
      const cards = await getCards();
      setLoading(false);
      setCards(cards);
      snack("success", "All the cards are here!");
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  }, []);
  const handleDeleteCard = useCallback(async (cardId) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }, []);

  const handleGetMyCard = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, null, cards);
      return card;
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = useCallback(async (cradId) => {
    try {
      const card = changeLikeStatus(cradId);
      requestStatus(false, null, cards, card);
      snack("success", "The business card has been Liked");
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  return {
    cards,
    isLoading,
    error,
    card,
    handleGetCards,
    handleDeleteCard,
    handleGetMyCard,
    handleLikeCard,
    handleGetCard,
  };
}
