import React, { useState, useEffect } from "react";
import FilterDropdown from "../../components/FilterDropdown/FilterDropdown.js";
import InputField from "../../components/InputField/InputField.js";
import InfoCard from "../../components/InfoCard/InfoCard.js";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Header from "../../components/Header/Header.js";

const Home = () => {
  const [data, setData] = useState(null);

  function getData() {
    fetch("https://restcountries.com/v2/all")
      .then((response) => response.json())
      .then((data) => {
        // setData(data);
        if (!data) {
          // console.log("Error - No data!");
        } else {
          setData(data);
          // console.log(data);
          // console.log(data[0].name);
        }
      });
  }

  useEffect(() => {
    getData();
  }, []);

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
            <InputField />
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
            console.log(data)
            {data.map((info) => (
              <InfoCard
                country={info.name}
                image={info.flag}
                region={info.region}
                population={info.population}
                capital={info.capital}
              />
            ))}
            {/* <InfoCard
            country={data[0].name}
            image={data[0].flag}
            region={data[0].region}
            population={data[0].population}
            capital={data[0].capital}
            />
            <InfoCard
              country="Mexico"
              image="https://cdn.audleytravel.com/828/591/60/363749-palenque-mexico.jpg"
              region="South America"
              population="129 million"
              capital="Mexico City"
            />
            <InfoCard
              country="United States"
              image="https://cdn.corporate.walmart.com/dims4/WMT/1534796/2147483647/strip/true/crop/2100x1166+0+231/resize/980x544!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F53%2F80%2Fac150c274a5ab00e4df6da59433a%2Fhome-office-sign-flag-horizontal_129826465142857703.jpg"
              region="North America"
              population="330 million"
              capital="Washington D.C."
            />
            <InfoCard
              country="France"
              image="https://ichef.bbci.co.uk/news/400/cpsprodpb/478C/production/_121561381_gettyimages-976199210.jpg"
              region="Europe"
              population="67 million"
              capital="Paris"
            /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
