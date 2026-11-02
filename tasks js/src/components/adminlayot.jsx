import { Box } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar.jsx";
export default function AdminLayout() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Box sx={{ display: "flex",
         flexDirection: "row" }}>
        <Box sx={{ flex: 1 }}>
          <Sidebar onclick={handleClick} 
          open={isOpen} />
        </Box>
        <Box sx={{ flex: 4, my: 4 }}>
          <Outlet />
        </Box>
      </Box>
    </>
  );
}