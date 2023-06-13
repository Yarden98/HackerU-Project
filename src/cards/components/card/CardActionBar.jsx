import React, { useState } from "react";
import { Box } from "@mui/system";
import { CardActions, Tooltip } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import IconButton from "@mui/material/IconButton";
import { func, string } from "prop-types";
import { useUser } from "../../../users/providers/UserProvider";
import { useNavigate } from "react-router-dom";
import CardDeleteDialog from "./CardDeleteDialog";
import ROUTES from "../../../routers/routeModel";

export default function CardActionBar({
  id,
  user_id,
  handleDelete,
  handleEdit,
  handleLike,
}) {
  const { user } = useUser();
  const [isDialogOpen, setDialog] = useState(false);
  const navigate = useNavigate();
  const handleDeleteCard = () => {
    handleDelete(id);
    setDialog(false);
  };
  return (
    <>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <Box>
          {user?.isAdmin || user?.id === user_id ? (
            <Box>
              <Tooltip title="Delete">
                <IconButton
                  aria-label="Delete Card"
                  onClick={() => setDialog(true)}
                >
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
              <Tooltip title="Edit">
                <IconButton
                  aria-label="Edit"
                  onClick={() => navigate(`${ROUTES.EDIT_CARD}/${id}`)}
                >
                  <EditIcon />
                </IconButton>
              </Tooltip>
            </Box>
          ) : null}
        </Box>
        <Box>
          <Tooltip title="Phone">
            <IconButton aria-label="Call">
              <PhoneIcon />
            </IconButton>
          </Tooltip>
          {user && (
            <Tooltip title="Favorite">
              <IconButton
                aria-label="Add to Favorite"
                onClick={() => handleLike(id)}
              >
                <FavoriteIcon />
              </IconButton>
            </Tooltip>
          )}
        </Box>
      </CardActions>
      <CardDeleteDialog
        isDialogOpen={isDialogOpen}
        onChangeDialog={() => setDialog(false)}
        onDelete={handleDeleteCard}
      />
    </>
  );
}

CardActionBar.propTypes = {
  id: string,
  handleDelete: func,
  handleEdit: func,
  handleLike: func,
};