import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import { Info } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routers/routeModel";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <>
      <Paper sx={{ position: "sticky", bottom: 0, left: 0, right: 0 }}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            label="About"
            icon={<Info />}
            onClick={() => navigate(ROUTES.ABOUT)}
          />
          <BottomNavigationAction
            label="Cards"
            icon={<FavoriteIcon />}
            onClick={() => navigate(ROUTES.CARDS)}
          />
        </BottomNavigation>
      </Paper>
    </>
  );
}
