import { FindInPage, Restore, Settings } from "@mui/icons-material";
import {
  BottomNavigation,
  BottomNavigationAction,
  CssBaseline,
  Paper,
} from "@mui/material";
import { Box } from "@mui/system";
import type { AppProps } from "next/app";
import { useState } from "react";
import Link from "../components/Link";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const [value, setValue] = useState();

  return (
    <Box sx={{ display: "flex", justifyContent: "center", height: "100vh" }}>
      <CssBaseline />
      <Box
        sx={{
          maxWidth: 600,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Box sx={{ flex: "1 0 0" }}>
          <Component {...pageProps} />
        </Box>
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              LinkComponent={Link}
              href="/notifications"
              label="Noti"
              icon={<Restore />}
            />
            <BottomNavigationAction
              LinkComponent={Link}
              href="/"
              label="Find"
              icon={<FindInPage />}
            />
            <BottomNavigationAction
              LinkComponent={Link}
              href="/mypage"
              label="My Page"
              icon={<Settings />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </Box>
  );
}

export default MyApp;
