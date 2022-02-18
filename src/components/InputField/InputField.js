import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

const InputField = ({ setValue }) => {
  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        "& > :not(style)": { margin: "20px 0 0 10px", width: "95%" },
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Grid container spacing={12}>
        <TextField
          // onKeyPress={getCountry()}
          onChange={handleChange}
          sx={{ color: "primary" }}
          placeholder="Search for a country..."
          focused
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Box>
  );
};

export default InputField;
