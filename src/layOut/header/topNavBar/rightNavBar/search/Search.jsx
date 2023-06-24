import React from "react";
import {
  Box,
  FormControl,
  IconButton,
  InputBase,
  OutlinedInput,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { shape } from "prop-types";
import { styled, alpha } from "@mui/material/styles";
import { useTheme } from "@emotion/react";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const handleChange = ({ target }) => setSearch({ q: target.value });
  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    marginLeft: theme.spacing(1),
    width: "auto",
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  return (
    <Box display="inline-flex">
      <FormControl>
        <Search>
          <SearchIconWrapper
            value={searchParams.get("q") ?? ""}
            onChange={handleChange}
            position="end"
          >
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            edge="end"
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </FormControl>
    </Box>
  );
}
