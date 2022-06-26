import { Box } from "@mui/system";
import type { InferGetServerSidePropsType, NextPage } from "next";
import { ReactElement } from "react";
import RoundingCard from "../components/RoundingCard";
import { Rounding } from "../models";

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement => {
  return (
    <Box sx={{ p: 3 }}>
      {props.data.roundings.map((rounding) => (
        <RoundingCard key={rounding.id} rounding={rounding} />
      ))}
    </Box>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/roundings");
  // const data = (await res.json()) as { roundings: Rounding[] };
  const data = await res.json();

  return { props: { data: data as { roundings: Rounding[] } } };
}

export default Home;
