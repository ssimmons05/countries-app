import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Header = ({ darkMode, setDarkMode }) => {
  return (
    <Box
      sx={{
        display: "block",
        height: "10vh",
        width: "100%",
        top: "0",
        border: "4px lightblue solid",
      }}
    >
      <Box>
        <Box
          component="img"
          sx={{
            position: "relative",
            left: "20px",
            top: "12px",
            height: 233,
            width: 350,
            maxHeight: { xs: 40, md: 40 },
            maxWidth: { xs: 60, md: 60 },
          }}
          alt="Photo of scenic landscape."
          src="https://storeys.com/wp-content/uploads/2021/02/tom-gainor-737280-unsplash-e1547754272802.jpg"
        />
        <Typography variant="h6" sx={{ display: "inline", margin: "0 30px" }}>
          Countries
        </Typography>
      </Box>
      <Button
        checked={darkMode}
        onClick={() => setDarkMode(!darkMode)}
        variant="contained"
        size="small"
        sx={{ position: "absolute", right: "25px", top: "15px" }}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </Button>
    </Box>
  );
};

export default Header;
