import { Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function LifeCycle() {
  let initialCounter;

  if (JSON.parse(localStorage.getItem("counter")) != null) {
    initialCounter = JSON.parse(localStorage.getItem("counter"));
  } else initialCounter = 0;

  const [counter, setCounter] = useState(initialCounter);

  useEffect(() => {
    console.log("in the useEffect The counter is" + counter);

    return () => {
      localStorage.setItem("counter", JSON.stringify(counter));
      console.log("in the return The counter is " + counter);
    };
  }, [counter]);

  const handleInc = () => {
    setCounter((prev) => prev + 1);
  };
  console.log("every render");

  return (
    <div>
      <Button onClick={handleInc}>+</Button>
      <Typography>{counter}</Typography>
    </div>
  );
}
