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
        sx={{ ml: "10px" }}
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

// import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";

// const FilterDropdown = () => {
//   return (
//     <Box margin="0 0 0 10px">
//       <div class="mui-dropdown">
//         <Button
//           variant="contained"
//           // class="mui-btn mui-btn--primary"
//           // data-mui-toggle="dropdown"
//         >
//           Filter by Region
//           {/* <span class="mui-caret"></span> */}
//         </Button>
//         <ul class="mui-dropdown__menu">
//           <li>
//             <a href="#">Option 1</a>
//           </li>
//           <li>
//             <a href="#">Option 2</a>
//           </li>
//           <li>
//             <a href="#">Option 3</a>
//           </li>
//           <li>
//             <a href="#">Option 4</a>
//           </li>
//         </ul>
//       </div>
//     </Box>
//   );
// };

// export default FilterDropdown;
