import React from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const BorderCountryButtons = ({ countriesInfo }) => {
  return (
    <div>
      <Grid container marginTop="-30px;">
        <Box>
          <h4
            display="inline"
            sx={{ display: "inline", padding: "0, 5px, 0 , 0" }}
          >
            Border Countries:{" "}
          </h4>
        </Box>
        <Box sx={{ position: "relative", padding: "15px 0 0 10px" }}>
          <Link to="/details">
            <Button
              variant="contained"
              sx={{
                backgroundColor: "blue",
              }}
            >
              {countriesInfo[0].borders[0]}
            </Button>
          </Link>
        </Box>
      </Grid>
    </div>
  );
};

export default BorderCountryButtons;
