import React from "react";
import { Box, Container, Grid, AppBar, Toolbar } from "@mui/material";
import AppRoutes from "./Routes";
import AppHeader from "./components/AppHeader/AppHeader";

const App: React.FC = () => {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "#f5f5f5" }}>
      <AppBar position="static" sx={{ mb: 4 }}>
        <Toolbar>
          <AppHeader />
        </Toolbar>
      </AppBar>
      {/* <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid> */}
      <Box component="main">
        <AppRoutes />
      </Box>
      {/* </Grid>
        </Grid>
      </Container> */}
    </Box>
  );
};

export default App;