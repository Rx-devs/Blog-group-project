import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth/useAuth";

const Navigation = () => {
  const { user, logout } = useAuth();

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/home"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Home</Typography>
                </MenuItem>
              </NavLink>
              <br></br>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/blogs"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Blogs</Typography>
                </MenuItem>
              </NavLink>
              <br></br>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/contact"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">Contact</Typography>
                </MenuItem>
              </NavLink>
              <br></br>
              <NavLink
                style={{ textDecoration: "none", color: "black" }}
                to="/aboutUs"
              >
                <MenuItem onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">About Us</Typography>
                </MenuItem>
              </NavLink>
              <br></br>
              {user.email ? (
                <MenuItem onClick={{handleCloseNavMenu,logout}}>
                  <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              ) : (
                <>
                  <NavLink
                    style={{ textDecoration: "none", color: "black" }}
                    to="/login"
                  >
                    <MenuItem onClick={handleCloseNavMenu}>
                      <Typography textAlign="center">Login</Typography>
                    </MenuItem>
                  </NavLink>
                </>
              )}
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/home"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Home
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/blogs"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Blogs
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/contact"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                Contact
              </Button>
            </NavLink>
            <NavLink
              style={{ textDecoration: "none", color: "white" }}
              to="/aboutUs"
            >
              <Button
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                About Us
              </Button>
            </NavLink>
            {user.email ? (
              <NavLink style={{ textDecoration: "none", color: "white" }}>
                <Button
                  onClick={{handleCloseNavMenu, logout}}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Log Out
                </Button>
              </NavLink>
            ) : (
              <NavLink
                style={{ textDecoration: "none", color: "white" }}
                to="/login"
              >
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  Login
                </Button>
              </NavLink>
            )}
          </Box>

          {user.email && (
            <>
              <Typography>{user.displayName}</Typography>
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/home"
                    >
                      <Typography textAlign="center">Home</Typography>
                    </NavLink>
                  </MenuItem>
                  <br></br>
                  <MenuItem onClick={handleCloseNavMenu}>
                    <NavLink
                      style={{ textDecoration: "none", color: "black" }}
                      to="/dashboard"
                    >
                      <Typography textAlign="center">Dashboard</Typography>
                    </NavLink>
                  </MenuItem>
                  <br></br>
                  <MenuItem onClick={{handleCloseNavMenu, logout}}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
