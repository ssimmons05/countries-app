import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import InfoCard from "../InfoCard/InfoCard";

const FilterDropdown = ({ countriesInfo, setRegionChoice, regionChoice }) => {
  // const [regionChoice, setRegionChoice] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);
    // console.log(event);
    // console.log(event.target.getAttribute("name"));

    setRegionChoice(event.target.getAttribute("name"));
    console.log(regionChoice);
  };
  return (
    <div>
      <Button
        endIcon={<ExpandMoreIcon />}
        sx={{
          ml: "10px",
          position: "absolute",
          right: "20px",
          marginTop: "25px",
        }}
        variant="contained"
        // id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Filter by Region
      </Button>
      <Menu
        sx={{ position: "absolute", marginTop: "10px" }}
        // id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose} key="0" name="Asia">
          Asia
        </MenuItem>
        <MenuItem onClick={handleClose} key="1" name="Africa">
          Africa
        </MenuItem>
        <MenuItem onClick={handleClose} key="2" name="Antarctic Ocean">
          Antarctic Ocean
        </MenuItem>
        <MenuItem onClick={handleClose} key="3" name="Americas">
          Americas
        </MenuItem>
        <MenuItem onClick={handleClose} key="4" name="Europe">
          Europe
        </MenuItem>
        <MenuItem onClick={handleClose} key="5" name="Oceania">
          Oceania
        </MenuItem>
        <MenuItem onClick={handleClose} key="6" name="Polar">
          Polar
        </MenuItem>
      </Menu>
    </div>
  );
};

export default FilterDropdown;
