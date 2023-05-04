import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import { useNavigate } from "react-router-dom";

const pages = ["Trending", "Recommend", "Profile"];

function ResponsiveAppBar() {
  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [currPath, setCurrPath] = useState<null | string>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleRouteClick = (page: string) => {
    navigate(`/${page}`);
    setCurrPath(page);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ background: "#1DB954" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AudiotrackIcon style={{ color: "#191414" }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "#191414",
              textDecoration: "none",
            }}
          >
            UNDERGROUNDIFY
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => handleRouteClick(page)}
                sx={{
                  my: 2,
                  fontWeight: currPath === page ? "bold" : undefined,
                  color: currPath === page ? "white" : "#191414",
                  display: "block",
                }}
                style={{ marginRight: "10px" }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
