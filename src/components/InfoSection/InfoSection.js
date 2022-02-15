import React from "react";
import BorderCountryButtons from "../BorderCountryButtons/BorderCountryButtons";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const InfoSection = () => {
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
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdMbXkS_AiJM5GpN83X0hSNuoK71J9MUAIIg&usqp=CAU"
            alt="${}"
            width="90%"
            display="block"
          />
        </Grid>
        <Grid
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
            <h1>Canada</h1>
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
            <h4>Native Name:</h4>
            <h4>Population:</h4>
            <h4>Region:</h4>
            <h4>Sub Region:</h4>
            <h4>Capital:</h4>
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
            <h4>Top Level Domain:</h4>
            <h4>Currencies:</h4>
            <h4>Languages:</h4>
          </Box>
          <BorderCountryButtons />
        </Grid>
      </Grid>
    </div>
  );
};

export default InfoSection;
