import React from "react";
import { Card } from "@mui/material";
const BasicCard = (countr) => {
  return (
    <div>
      <Card>capital:{countr.capital}</Card>
    </div>
  );
};

export default BasicCard;
