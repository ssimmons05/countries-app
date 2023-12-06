import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
// import { CountriesInfoContext } from "../../App";

const BorderCountryButtons = ({ countriesInfo, countriesBorders }) => {
  console.log(countriesBorders, countriesInfo);

  // const [borderCountry, setBorderCountry] = useState("");

  // const handleClick = (event, countriesInfo) => {
  //   const borderValue = event.target.innerText;
  //   console.log(borderValue.toLowerCase(), countriesInfo);

  //   setBorderCountry(
  //     countriesInfo.filter((info) =>
  //       info.borders.toLowerCase().includes(borderValue.toLowerCase())
  //     )
  //   );
  // };
  // console.log(borderCountry);

  // const searchCountries = (borderValue) => {
  //   countriesInfo.filter((info) =>
  //     info.name.toLowerCase().includes(borderValue.toLowerCase())
  //   );
  // };

  return (
    <Grid container marginTop="-30px">
      <Box>
        <h4
          display="inline"
          sx={{ display: "inline", padding: "0, 5px, 0 , 0" }}
        >
          Border Countries:{" "}
        </h4>
      </Box>
      {countriesBorders.map((border) => (
        <Box
          key={border}
          sx={{ position: "relative", padding: "15px 0 0 10px" }}
        >
          <Link to={`/details?alpha/${border}`}>
            <Button
              value={border}
              // onClick={handleClick}
              variant="contained"
            >
              {border}
            </Button>
          </Link>
        </Box>
      ))}
    </Grid>
  );
};

export default BorderCountryButtons;

//Onclick(?) compare clicked border (abbreviation) to the country that it matches with (ccis data).
// Do this by mapping through the list of countries and comparing each one to the chosen border value (e.target.value?)
// When there's a match - put the matching countries value in the Link url query param.
