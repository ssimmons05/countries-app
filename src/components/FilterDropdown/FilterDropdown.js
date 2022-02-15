import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function FilterDropdown() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
        <MenuItem onClick={handleClose}>Asia</MenuItem>
        <MenuItem onClick={handleClose}>Africa</MenuItem>
        <MenuItem onClick={handleClose}>North America</MenuItem>
        <MenuItem onClick={handleClose}>South America</MenuItem>
        <MenuItem onClick={handleClose}>Antarctica</MenuItem>
        <MenuItem onClick={handleClose}>Europe</MenuItem>
        <MenuItem onClick={handleClose}>Australia</MenuItem>
      </Menu>
    </div>
  );
}
