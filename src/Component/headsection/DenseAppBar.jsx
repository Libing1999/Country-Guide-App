import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

export default function DenseAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 8 }}
          ></IconButton>
          <Typography
            variant="h6"
            color="white"
            fontWeight={"bold"}
            fontSize={20}
            fontFamily={("Kanit", "sans-serif")}
          >
            Country Guide App
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
