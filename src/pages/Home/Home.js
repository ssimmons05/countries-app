import React, { useState, useEffect } from "react";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown.js";
import InputField from "../../components/InputField/InputField.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header.js";

const Home = ({ setCountriesInfo, countriesInfo }) => {
  // function getData() {
  //   fetch("https://restcountries.com/v2/all")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       // if (data === null) {
  //       //   console.log("Error - No data!");
  //       // } else {
  //       //   setData(data);
  //       console.log(data);
  //       //   console.log(data[0].name);
  //     });
  // }
  const [value, setValue] = useState("");

  function getData() {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesInfo(data);
        console.log(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(value);

  return (
    <>
      <Header />
      <Box
        sx={{
          flexGrow: 1,
          backgroundColor: "lightMode.background",
          display: "block",
          width: "100%",
          position: "relative",
          top: "16.5px",
        }}
      >
        <Grid direction="row" container spacing={2}>
          <Grid item xs={12} md={4}>
            <InputField setValue={setValue} />
          </Grid>
          <Grid item xs={6} md={4}>
            <FilterDropdown />
          </Grid>
          <Grid
            container
            spacing={1}
            // columns={4}
            direction="row"
            justifyContent="center"
            item
          >
            {!value
              ? countriesInfo.map((info) => (
                  <InfoCard
                    country={info.name}
                    image={info.flag}
                    region={info.region}
                    population={info.population}
                    capital={info.capital}
                  />
                ))
              : countriesInfo.filter((info) =>
                  info.name
                    .includes(value)
                    .map((filteredInfo) => <li>{filteredInfo}</li>)
                )}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
