import { Avatar, IconButton, Tooltip } from "@mui/material";
import React from "react";
import { useMenu } from "../menu/provider/MenuProvider";

export default function Logged({ handleClick }) {
  const setOpen = useMenu();
  return (
    <Tooltip title="Open settings">
      <IconButton
        sx={{ xs: "none", p: 0, display: "inline-flex", marginLeft: 2 }}
        onClick={() => setOpen(true)}
      >
        <Avatar alt="Bird" src="/assets/images/loginAvatr.jpeg" />
      </IconButton>
    </Tooltip>
  );
}
