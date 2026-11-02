import { Container, Typography } from "@mui/material";
import Header from "../../components/Layout/Header";
import Footer from "../../components/Layout/Footer";

export default function LandinPage() {
  return (
    <>
      <Header />
      <Container sx={{ my: 3, minHeight: "100vh" }}>
        <Typography variant="h1">Welocme</Typography>
      </Container>
      <Footer />
    </>
  );
}