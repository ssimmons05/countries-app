import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterDropdown = ({ countriesInfo, setRegionChoice, regionChoice }) => {
  console.log(countriesInfo);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);

    setRegionChoice(event.target.getAttribute("name"));
    console.log(regionChoice);
  };

  const filteredRegions = countriesInfo.filter((info) =>
    info.region.toLowerCase().includes(regionChoice.toLowerCase())
  );

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
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Filter by Region
      </Button>
      <Menu
        sx={{ position: "absolute", marginTop: "10px" }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {countriesInfo.map((info, index) => (
          <MenuItem onClick={handleClose} id={index} name={info.region}>
            {info.region}
          </MenuItem>
        ))}
        ;
        {/* <MenuItem onClick={handleClose} key="1" name="Africa">
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
        </MenuItem> */}
      </Menu>
    </div>
  );
};

export default FilterDropdown;
