import React from "react";
import Header from "../Header/Header.js";
import Box from "@mui/material/Box";
import BackButton from "../BackButton/BackButton.js";
import Grid from "@mui/material/Grid";
import BorderCountryButtons from "../BorderCountryButtons/BorderCountryButtons.js";

const DetailsPage = () => {
  return (
    <>
      <Header />
      <Box margin="30px 0 0 50px">
        <BackButton />
      </Box>
      <Grid
        container
        spacing={2}
        p={3}
        sx={{
          justifyContent: "center",
          margin: "0 auto",
          alignItems: "center",
          flexGrow: 1,
          backgroundColor: "purple",

          // display: "block",
          // width: "100%",
          // position: "relative",
          // top: "16.5px",
        }}
      >
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            justifyContent: "center",
            p: 4,
            backgroundColor: "red",
            margin: "0 auto",
          }}
        >
          {/* <Box
            sx={{
              // display: "inline-block",
              backgroundColor: "purple",
              // height: "50vh",
              // justifyContent: "center",
              margin: "0 auto",
            }}
          > */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMbXkS_AiJM5GpN83X0hSNuoK71J9MUAIIg&usqp=CAU"
            alt="${}"
            width="90%"
            display="block"
          />
          {/* </Box> */}
        </Grid>
        <Grid item xs={12} md={6} backgroundColor="green" height="380px">
          {/* <Box
            sx={{
              display: "flex",
              fontFamily: "Nunito Sans",
              flexwrap: "wrap",
              height: "50vh",
            }} 
          > */}
          {/* <Box
            backgroundColor="orange"
            sx={{ display: "block", width: "100%", height: "50px" }}
          > */}
          <h1>Canada</h1>
          {/* </Box> */}
          <Box
            // padding="50px 100px 0 0"
            sx={{
              display: "block",
              backgroundColor: "brown",
              width: "50%",
              height: "70%",
            }}
          >
            <h4>Native Name:</h4>
            <h4>Population:</h4>
            <h4>Region:</h4>
            <h4>Sub Region:</h4>
            <h4>Capital:</h4>
          </Box>
          <Box
            sx={{
              display: "block",
              backgroundColor: "pink",
              width: "50%",
              height: "70%",
            }}
          >
            <h4>Top Level Domain:</h4>
            <h4>Currencies:</h4>
            <h4>Languages:</h4>
          </Box>
          <BorderCountryButtons />
          {/* </Box> */}
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsPage;
