import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { bool, func } from "prop-types";
import React from "react";

export default function CardDeleteDialog({
  isDialogOpen,
  onDelete,
  onChangeDialog,
}) {
  return (
    <Dialog
      open={isDialogOpen}
      onClose={onChangeDialog}
      aria-labelledby="alert-dialog-title
  "
      aria-describedby="alert-dialog-description"
      maxWidth="xs"
    >
      <DialogTitle id="alert-dialog-title">
        {"Are you sure you want to delete thiis cards?"}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          This operation will completely delete the business card and all its
          data from the database and it will not be possible to retrieve the
          card afterwards
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onChangeDialog} color="error">
          Cancel
        </Button>
        <Button onClick={onDelete} autoFocus color="info">
          Delete card
        </Button>
      </DialogActions>
    </Dialog>
  );
}
CardDeleteDialog.propTypes = {
  isDialogOpen: bool.isRequired,
  onChangeDialog: func.isRequired,
  onDelete: func.isRequired,
};
