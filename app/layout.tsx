"use client";
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../theme/mui-theme";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import { Box } from "@mui/material";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Box sx={{ display: "flex" }}>
            <Sidebar />
            <Box sx={{ display: "flex", flexDirection: "column", flexGrow: 1 }}>
              <Navbar />
              <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                {children}
              </Box>
            </Box>
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
