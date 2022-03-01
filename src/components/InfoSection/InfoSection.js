import React from "react";
import BorderCountryButtons from "../BorderCountryButtons/BorderCountryButtons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const InfoSection = ({ countriesInfo, key, country }) => {
  console.log({ countriesInfo });
  console.log({ country });

  return (
    <div>
      <Grid
        container
        spacing={2}
        p={3}
        sx={{
          justifyContent: "center",
          margin: "0 auto",
          alignItems: "center",
          flexGrow: 1,
          // backgroundColor: "purple",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            p: 4,
            // backgroundColor: "red",
            margin: "0 auto",
          }}
        >
          <img
            src={countriesInfo.flag}
            alt="${}"
            width="90%"
            display="block"
            border="1.5px solid black"
          />
        </Grid>
        <Grid
          item
          container
          xs={12}
          md={6}
          // backgroundColor="green"
          height="380px"
        >
          <Box
            // backgroundColor="orange"
            sx={{
              display: "block",
              width: "100%",
              height: "60px",
              position: "relative",
              top: "-20px",
            }}
          >
            <h1>{country}</h1>
            {console.log({ country })}
          </Box>
          <Box
            sx={{
              display: "inline-block",
              // backgroundColor: "brown",
              width: "40%",
              height: "70%",
              alignItems: "start",
            }}
          >
            <h4>Native Name: {countriesInfo.name}</h4>
            <h4>Population: {countriesInfo.population}</h4>
            <h4>Region: {countriesInfo.region}</h4>
            <h4>Sub Region: {countriesInfo.subregion}</h4>
            <h4>Capital: {countriesInfo.capital}</h4>
          </Box>
          <Box
            sx={{
              display: "inline-block",
              // backgroundColor: "pink",
              width: "50%",
              height: "70%",
              alignItems: "start",
            }}
          >
            {/* <h4>Top Level Domain: {countriesInfo.topLevelDomain[0]}</h4>
            <h4>Currencies: {countriesInfo.currencies}</h4>
            <h4>Languages: {countriesInfo.languages}</h4> */}
          </Box>
          <BorderCountryButtons countriesInfo={countriesInfo} />
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoSection;
