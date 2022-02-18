import React from "react";
import Header from "../../components/Header/Header.js";
import Box from "@mui/material/Box";
import InfoSection from "../../components/InfoSection/InfoSection.js";
import BackButton from "../../components/BackButton/BackButton.js";

const DetailsPage = ({ countriesInfo }) => {
  return (
    <>
      {console.log(countriesInfo)}

      <Header />
      <Box margin="30px 0 0 50px">
        <BackButton />
      </Box>
      <InfoSection countriesInfo={countriesInfo} />
    </>
  );
};

export default DetailsPage;
