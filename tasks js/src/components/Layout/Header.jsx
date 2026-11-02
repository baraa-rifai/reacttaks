import {
  AppBar,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Hooks/useAuth.js";

export default function Header() {
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  return (
    <>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography variant="h2">Logo</Typography>
          <Box sx={{ display: "flex", flexDirection: "row", gap: 3 }}>
            <IconButton onClick={() => navigate("/")}>Home</IconButton>
            <IconButton>Contact</IconButton>
            {!currentUser || Object.keys(currentUser).length === 0 ? (
              <>
                <IconButton onClick={() => navigate("/register")}>
                  Register
                </IconButton>
                <IconButton onClick={() => navigate("/login")}>
                  Login
                </IconButton>
              </>
            ) : (
              <>
                <IconButton onClick={() => logout()}>Logout</IconButton>
                <IconButton onClick={() => navigate("/register")}>
                  Profile
                </IconButton>
              </>
            )}
            <IconButton>About</IconButton>
            <IconButton>Menu</IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}