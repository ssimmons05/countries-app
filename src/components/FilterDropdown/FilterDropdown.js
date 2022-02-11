import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const FilterDropdown = () => {
  return (
    <Box margin="0 0 0 10px">
      <div class="mui-dropdown">
        <Button
          variant="contained"
          // class="mui-btn mui-btn--primary"
          // data-mui-toggle="dropdown"
        >
          Filter by Region
          {/* <span class="mui-caret"></span> */}
        </Button>
        <ul class="mui-dropdown__menu">
          <li>
            <a href="#">Option 1</a>
          </li>
          <li>
            <a href="#">Option 2</a>
          </li>
          <li>
            <a href="#">Option 3</a>
          </li>
          <li>
            <a href="#">Option 4</a>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default FilterDropdown;
