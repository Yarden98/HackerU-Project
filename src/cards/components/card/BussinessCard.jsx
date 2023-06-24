import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "../card/CardHeader";
import CardBody from "../card/CardBody";
import CardActionBar from "../card/CardActionBar";
import cardType from "../../models/cardType";
import { func } from "prop-types";
import { CardActionArea } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../../routers/routeModel";

export default function BussinessCard({
  card,
  handleDelete,
  handleEdit,
  onLike,
}) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 300, m: 2 }}>
      <CardActionArea
        onClick={() => navigate(`${ROUTES.CARD_INFO}/${card._id}`)}
      >
        <CardHeader image={card.image} />
        <CardBody
          title={card.title}
          subtitle={card.subtitle}
          address={card.address}
          phone={card.phone}
          bizNumber={card.bizNumber}
        />
      </CardActionArea>
      <CardActionBar
        id={card._id}
        user_id={card.user_id}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        onLike={onLike}
        cardLikes={card.likes}
      />
    </Card>
  );
}

BussinessCard.propTypes = {
  card: cardType.isRequired,
  handleDelete: func,
  handleEdit: func,
  handleLike: func,
};
