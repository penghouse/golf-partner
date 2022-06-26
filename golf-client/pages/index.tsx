import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import type { InferGetServerSidePropsType, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { ReactElement } from "react";
import { Rounding } from "../models";
import styles from "../styles/Home.module.css";

const Home = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
): ReactElement => {
  return (
    <Box sx={{ background: "red", width: 300, height: 300 }}>
      <>
        {props.data.roundings.map((rounding) => (
          <Typography>{rounding.description}</Typography>
        ))}
      </>
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
