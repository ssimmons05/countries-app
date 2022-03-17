import * as React from "react";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";

const BackButton = () => {
  // let history = useHistory;

  return (
    <Link to="/">
      <Button
        variant="contained"
        // onClick={history.push("/")}
        startIcon={<ArrowBackIosNewIcon />}
      >
        Back
      </Button>
    </Link>
  );
};

export default BackButton;
