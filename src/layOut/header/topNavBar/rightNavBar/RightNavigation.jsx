import { Box, IconButton } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useTheme } from "../../../../provider/ThemeProvider";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Logged from "./Logged";
import { useUser } from "../../../../users/providers/UserProvider";
import Notlogged from "./Notlogged";
import MoreButton from "./MoreButton";
export default function RightNavigation() {
  const { isDark, toggleDark } = useTheme();
  const { user } = useUser();
  return (
    <>
      <Box sx={{ display: { xs: "none", md: "inline-flex" } }}>
        <IconButton sx={{ marginLeft: 1 }} onClick={toggleDark}>
          {isDark ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>

        {user ? <Logged /> : <Notlogged />}
      </Box>
      <MoreButton />
    </>
  );
}
