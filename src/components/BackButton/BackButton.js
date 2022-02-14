import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function BackButton() {
  return (
    <Button
      variant="contained"
      startIcon={<ArrowBackIosNewIcon />}
      sx={{ backgroundColor: "blue" }}
    >
      Back
    </Button>
  );
}

{
  /* <Button variant="contained" sx={{ margin: "30px 0 0 50px" }}>
        Back
      </Button> */
}
