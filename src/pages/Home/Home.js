import React, { useState, useEffect } from "react";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown.js";
import InputField from "../../components/InputField/InputField.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header.js";

const Home = ({ setCountriesInfo, countriesInfo, darkMode, setDarkMode }) => {
  const [value, setValue] = useState("");
  const [regionChoice, setRegionChoice] = useState("");

  function getData() {
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((data) => {
        setCountriesInfo(data);
      });
  }

  useEffect(() => {
    getData();
  }, []);
  console.log(value);

  const displayAll = () => {
    return countriesInfo.map((info, index) => (
      <InfoCard
        key={index}
        id={index}
        country={info.name}
        image={info.flag}
        region={info.region}
        population={info.population}
        capital={info.capital}
        borders={info.borders}
        subregion={info.subregion}
      />
    ));
  };

  const searchCountries = () => {
    const filteredCountries = countriesInfo.filter((info) =>
      info.name.toLowerCase().includes(value.toLowerCase())
    );
    return filteredCountries.map((info, index) => (
      <InfoCard
        key={info.name}
        id={index}
        country={info.name}
        image={info.flag}
        region={info.region}
        population={info.population}
        capital={info.capital}
        borders={info.borders}
        subregion={info.subregion}
      />
    ));
  };

  const chooseRegion = () => {
    const filteredRegions = countriesInfo.filter((info) =>
      info.region.toLowerCase().includes(regionChoice.toLowerCase())
    );

    return filteredRegions.map((info, index) => (
      <InfoCard
        key={index}
        id={index}
        country={info.name}
        image={info.flag}
        region={info.region}
        population={info.population}
        capital={info.capital}
        borders={info.borders}
        subregion={info.subregion}
      />
    ));
  };

  let display;
  if (!value && !regionChoice) {
    display = displayAll(countriesInfo);
  } else if (regionChoice) {
    display = chooseRegion(regionChoice);
  } else {
    display = searchCountries(countriesInfo, value);
  }

  return (
    <>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box
        sx={{
          flexGrow: 1,
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
              regionChoice={regionChoice}
            />
          </Grid>
          <Grid
            container
            spacing={1}
            direction="row"
            justifyContent="center"
            item
          >
            {display}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
