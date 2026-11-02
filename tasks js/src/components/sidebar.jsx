import { Box, Button, List, ListItem, ListItemButton } from "@mui/material";
import { useAuth } from "../../../Hooks/useAuth.js";
import { useNavigate } from "react-router-dom";
import CategoryIcon from "@mui/icons-material/Category";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import MessageIcon from "@mui/icons-material/Message";
import ExtensionIcon from "@mui/icons-material/Extension";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person";
import ReorderIcon from "@mui/icons-material/Reorder";
export default function Sidebar({ open, onclick }) {
  const { lougout } = useAuth();
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          width: open ? "300px" : "70px",
          bgcolor: "#301934",
          height: "100vh",
          overflowY: "scroll",
          color: "white",
          fontSize: open ? "24px" : "30px",
          fontWeight: "bold",
          textAlign: open ? "left" : "center",
        }}
      >
        <Button onClick={onclick}>
          <ReorderIcon />
        </Button>
        <List>
          <ListItem>
            {open ? (
              <>
                <DashboardIcon />
                <ListItemButton 
                onClick={() => 
                navigate("/admin/dashboard")}>
                  Dashboard
                </ListItemButton>
              </>
            ) : (
              <>
                <DashboardIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => 
                    navigate("/admin/dashboard")}
                />
              </>
            )}
          </ListItem>
          <ListItem>
            {open ? (
              <>
        <GroupIcon />
      <ListItemButton onClick={() =>
         navigate("/admin/manage-users")}>
          Manage Users
     </ListItemButton>
              </>
            ) : (
        <GroupIcon 
        onClick={() =>
    navigate("/admin/manage-users")} />
            )}
          </ListItem>
          <ListItem>
            <CategoryIcon />
            <ListItemButton>Manage Categories</ListItemButton>
          </ListItem>
          <ListItem>
            <ExtensionIcon />
            <ListItemButton onClick={() => navigate("/admin/manage-products")}>
              Manage Products
            </ListItemButton>
          </ListItem>
          <ListItem>
            <MessageIcon />
            <ListItemButton>Manage Messages</ListItemButton>
          </ListItem>
          <ListItem>
            <PersonIcon />
            <ListItemButton>Manage Profile</ListItemButton>
          </ListItem>
          <ListItem>
            <LogoutIcon />
            <ListItemButton onClick={() => lougout()}>Logout</ListItemButton>
          </ListItem>
        </List>
      </Box>
    </>
  );
}