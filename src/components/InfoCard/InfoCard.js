import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

const InfoCard = ({
  country,
  image,
  region,
  population,
  capital,
  borders,
  subregion,
  id,
}) => {
  return (
    <Link
      to={{
        pathname: "/details",
        search: `?country=${country}`,
        state: {
          country,
          image,
          region,
          population,
          capital,
          borders,
          subregion,
          id,
        },
      }}
    >
      <Card
        sx={{
          key: { id },
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
            <ul sx={{ listStyleType: "none" }}>
              <li>
                <Typography variant="body2" color="lightMode.text">
                  Region: {region}
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="lightMode.text">
                  Population: {population}
                </Typography>
              </li>
              <li>
                <Typography variant="body2" color="lightMode.text">
                  Capital: {capital}
                </Typography>
              </li>
            </ul>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default InfoCard;
