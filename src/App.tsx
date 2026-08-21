import Box from "@mui/material/Box";
import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Box sx={{ minHeight: "100vh", backgroundColor: "background.default" }}>
      <ScrollToTop />
      <Sidebar />
      <Box component="main" sx={{ ml: { xs: 0, md: "220px" }, width: { xs: "100%", md: "calc(100% - 220px)" } }}>
        <Outlet />
      </Box>
    </Box>
  );
}

export default App;
