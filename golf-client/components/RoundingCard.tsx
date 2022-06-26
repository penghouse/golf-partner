import { Box, Typography } from "@mui/material";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import React, { ReactElement } from "react";
import { Rounding } from "../models";

interface Props {
  rounding: Rounding;
}
function RoundingCard(props: Props): ReactElement {
  const { photo, description, when, where } = props.rounding;

  return (
    <Box sx={{ height: 100, border: "1px solid black", display: "flex" }}>
      <Image height={100} width={100} src={photo} />
      <Box sx={{ ml: 1 }}>
        <Typography>{format(parseISO(when), "yyyy-MM-dd HH:mm")}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </Box>
  );
}

export default RoundingCard;
