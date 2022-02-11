import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function InfoCard({
  country,
  image,
  region,
  population,
  capital,
}) {
  return (
    <Card
      sx={{
        margin: "30px",
        width: 345,
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
          alt="photo of Canadian wilderness"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {country}
          </Typography>
          <Typography variant="body2" color="text.primary">
            <ul sx={{ listStyleType: "none" }}>
              <li>Region: {region}</li>
              <li>Population: {population}</li>
              <li>Capital: {capital}</li>
            </ul>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
