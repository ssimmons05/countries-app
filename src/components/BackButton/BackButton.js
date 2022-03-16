import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";

const BackButton = () => {
  return (
    <Link to="/">
      <Button variant="contained" startIcon={<ArrowBackIosNewIcon />}>
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
