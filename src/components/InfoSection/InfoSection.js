import React, { useEffect } from "react";
import BorderCountryButtons from "../BorderCountryButtons/BorderCountryButtons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useLocation } from "react-router-dom";

const InfoSection = ({ countriesInfo, setCountriesInfo }) => {
  let location = useLocation();
  console.log(location.search);

  let params = new URLSearchParams(document.location.search);
  let country = params.get("country");
  console.log(country);

  function getData() {
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((data) => {
        setCountriesInfo(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  console.log(countriesInfo);

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
          src={location.state.image}
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
          <h1>{location.state.country}</h1>
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "40%",
            height: "70%",
            alignItems: "start",
          }}
        >
          <h4>Native Name: {location.state.country}</h4>
          <h4>Population: {location.state.population}</h4>
          <h4>Region: {location.state.region}</h4>
          <h4>Sub Region: {location.state.subregion}</h4>
          <h4>Capital: {location.state.capital}</h4>
        </Box>
        <Box
          sx={{
            display: "inline-block",
            width: "50%",
            height: "70%",
            alignItems: "start",
          }}
        ></Box>
        {location.state.borders && (
          <BorderCountryButtons
            countriesInfo={countriesInfo}
            countriesBorders={location.state.borders}
            setCountriesInfo={setCountriesInfo}
          />
        )}
      </Grid>
    </Grid>
  );
};

export default InfoSection;
