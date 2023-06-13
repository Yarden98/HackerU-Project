import { AppBar, Container, Toolbar } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import NavItem from "../routers/components/NavItem";

export default function SandBox() {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem to="first" label="firstcomp" sx={{ color: "black" }} />
          <NavItem to="second" label="secondcomp" sx={{ color: "black" }} />
          <NavItem to="life-cycle" label="LifeCycle" sx={{ color: "black" }} />
          <NavItem to="country" label="Country" sx={{ color: "black" }} />
          <NavItem to="memo" label="Memoization" sx={{ color: "black" }} />
          <NavItem to="counter" label="My counter" sx={{ color: "black" }} />
          <NavItem to="myform" label="My form" sx={{ color: "black" }} />
          <NavItem to="country" label="country" sx={{ color: "black" }} />
          <NavItem to="grand" label="Context" sx={{ color: "black" }} />
          <NavItem to="form" label="Form" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>
      <Container>
        <Outlet />
      </Container>
    </div>
  );
}
