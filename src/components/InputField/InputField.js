import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

// const inputStyle = {
//   fontFamily: "Times",
//   // fontSize: 18.9px
//   color: "red",
// };

const InputField = () => {
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
          // style={inputStyle}
          // currentColor="red"
          sx={{ color: "primary" }}
          placeholder="Search for a country..."
          // color="primary"
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
