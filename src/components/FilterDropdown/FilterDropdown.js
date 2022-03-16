import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FilterDropdown = ({ countriesInfo, setRegionChoice, regionChoice }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event) => {
    setAnchorEl(null);

    setRegionChoice(event.target.getAttribute("name"));
  };

  const filteredRegions = Array.from(
    new Set(countriesInfo.map((info) => info.region))
  ).map((region) => {
    return countriesInfo.find((info) => info.region === region);
  });

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
        {filteredRegions.map((info, index) => (
          <MenuItem onClick={handleClose} id={index} name={info.region}>
            {info.region}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default FilterDropdown;
