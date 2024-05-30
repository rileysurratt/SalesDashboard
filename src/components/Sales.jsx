import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { mockData } from "../../public/MockData";
import PointOfSaleSharpIcon from "@mui/icons-material/PointOfSaleSharp";

const salesObtained = mockData.reduce(
  (accumulator, cost) => accumulator + 1,
  0
);

const card = (
  <React.Fragment>
    <CardContent>
      <PointOfSaleSharpIcon sx={{ color: '#7dffc4'}}/>
      <Typography variant="h5">
        {salesObtained}
      </Typography>
      <Typography variant="h5" sx={{ color: '#7dffc4'}}>
        Sales Obtained
      </Typography>
    </CardContent>
  </React.Fragment>
);

export default function SalesObtained() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
