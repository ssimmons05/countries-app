import React from "react";
import BorderCountryButtons from "../BorderCountryButtons/BorderCountryButtons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const InfoSection = ({ countriesInfo, country }) => {
  console.log(country);

  return (
    <Grid
      container
      spacing={2}
      p={3}
      sx={{
        justifyContent: "center",
        margin: "0 auto",
        alignItems: "center",
        flexGrow: 1,
      }}
    >
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          justifyContent: "center",
          p: 4,
          margin: "0 auto",
        }}
      >
        <img
          src={countriesInfo[0].flag}
          alt="${}"
          width="90%"
          display="block"
          border="1.5px solid black"
        />
      </Grid>
      <Grid item container xs={12} md={6} height="380px">
        <Box
          sx={{
            display: "block",
            width: "100%",
            height: "60px",
            position: "relative",
            top: "-20px",
          }}
        >
          <h1>{countriesInfo[0].name}</h1>
          {console.log({ country })}
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "40%",
            height: "70%",
            alignItems: "start",
          }}
        >
          <h4>Native Name: {countriesInfo[0].name}</h4>
          <h4>Population: {countriesInfo[0].population}</h4>
          <h4>Region: {countriesInfo[0].region}</h4>
          <h4>Sub Region: {countriesInfo[0].subregion}</h4>
          <h4>Capital: {countriesInfo[0].capital}</h4>
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "50%",
            height: "70%",
            alignItems: "start",
          }}
        ></Box>
        <BorderCountryButtons countriesInfo={countriesInfo} />
      </Grid>
    </Grid>
  );
};

export default InfoSection;
