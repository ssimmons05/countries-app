import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const InfoCard = ({ country, image, region, population, capital, id }) => {
  console.log(id);
  console.log(region);

  return (
    <Link
      to={`/details?country=${country}`}
      sx={{ textDecoration: "typography.a" }}
    >
      <Card
        sx={{
          color: "lightMode.text",
          margin: "30px",
          width: "20vw",
          boxShadow: "8",
          border: "2px solid gray",
        }}
      >
        <CardActionArea>
          <CardMedia
            sx={{ borderBottom: "2px solid gray" }}
            component="img"
            height="180"
            image={image}
            alt={`{"flag of" ${country}}`}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {country}
            </Typography>
            <Typography variant="body2" color="lightMode.text">
              <ul sx={{ listStyleType: "none" }}>
                <li>Region: {region}</li>
                <li>Population: {population}</li>
                <li>Capital: {capital}</li>
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default InfoCard;
