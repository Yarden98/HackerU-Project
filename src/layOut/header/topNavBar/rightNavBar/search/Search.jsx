import React, { useEffect, useState } from "react";
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
import {
  Navigate,
  createSearchParams,
  useSearchParams,
} from "react-router-dom";
import useCards from "../../../../../cards/hooks/useCards";
import searchStyle from "./searchStyle";

export default function Search({}) {
  // const { isDark } = useTheme();
  const [searchParams, setSearch] = useSearchParams();
  const [query, setQuery] = useState("");
  const handleChange = ({ target }) => setQuery(target.value);
  const { SearchDiv, SearchIconWrapper, StyledInputBase } = searchStyle();
  useEffect(() => {
    setSearch({ q: query });
  }, [query]);

  return (
    <Box display="inline-flex">
      <FormControl>
        <SearchDiv>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            position="end"
          />
        </SearchDiv>
      </FormControl>
    </Box>
  );
}
