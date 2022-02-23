import React, { useState, useEffect } from "react";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown.js";
import InputField from "../../components/InputField/InputField.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header.js";

const Home = ({ setCountriesInfo, countriesInfo }) => {
  const [value, setValue] = useState("");
  const [regionChoice, setRegionChoice] = useState("");

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

  const displayAll = () => {
    console.log(countriesInfo);

    return countriesInfo.map((info, index) => (
      <InfoCard
        key={index}
        country={info.name}
        image={info.flag}
        region={info.region}
        population={info.population}
        capital={info.capital}
        borders={info.borders}
      />
    ));
  };

  const searchCountries = () => {
    console.log(countriesInfo, value);
    const filteredCountries = countriesInfo.filter((info) =>
      info.name.toLowerCase().includes(value.toLowerCase())
    );
    return filteredCountries.map((info, index) => (
      <InfoCard
        key={index}
        country={info.name}
        image={info.flag}
        region={info.region}
        population={info.population}
        capital={info.capital}
        borders={info.borders}
      />
    ));
  };

  const chooseRegion = () => {
    const filteredRegions = countriesInfo.filter((info) =>
      info.region.toLowerCase().includes(regionChoice.toLowerCase())
    );
    console.log(regionChoice);
    console.log(filteredRegions);

    return filteredRegions.map((info, index) => (
      <InfoCard
        key={index}
        country={info.name}
        image={info.flag}
        region={info.region}
        population={info.population}
        capital={info.capital}
        borders={info.borders}
      />
    ));
  };

  let display;
  if (!value && !regionChoice) {
    display = displayAll(countriesInfo);
    console.log(countriesInfo);
  } else if (regionChoice) {
    display = chooseRegion(regionChoice);
  } else {
    display = searchCountries(countriesInfo, value);
  }

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
            <FilterDropdown
              countriesInfo={countriesInfo}
              setRegionChoice={setRegionChoice}
            />
          </Grid>
          <Grid
            container
            spacing={1}
            // columns={4}
            direction="row"
            justifyContent="center"
            item
          >
            {display}
            {/* {if (!value && !regionChoice)
            
            else if (regionChoice) {chooseRegion(regionChoice)} else{
            searchCountries(countriesInfo, value)} */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
