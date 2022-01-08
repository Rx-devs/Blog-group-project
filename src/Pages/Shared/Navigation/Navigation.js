import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { NavLink } from 'react-router-dom';
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

  // navlink styles
  const customStyle = {
    textDecoration: "none", color: "#000000", display: "block", textTransform: "capitalize", fontSize: "16px"
  };
  const activeStyle = {
    ...customStyle, color: 'red',
  };

  return (
    <AppBar sx={{ px: 6, py: 0, background: 'transparent', boxShadow: 'none' }} position="static">
      <Container>
        <Toolbar disableGutters>
          {/* Large Device Logo*/}
          <Typography
            variant="h4"
            noWrap
            component="div"
            sx={{ color: "#ff3e30", display: { xs: 'none', md: 'flex' } }}
            style={{marginRight:'20px'}}
          >
            BlogsFeed
          </Typography>

          {/* Small Device */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{ color: '#000' }} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <Box style={{ display: 'flex', flexDirection: 'column', width: '160px' }}>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink
                    to="/home"
                    style={({ isActive }) =>
                      isActive ? activeStyle : customStyle
                    }>
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink
                    to="/dashboard"
                    style={({ isActive }) =>
                      isActive ? activeStyle : customStyle
                    }>
                    Dashboard
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink
                    to="/allBlogs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : customStyle
                    }>
                    Blogs
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  <NavLink
                    to="/aboutUs"
                    style={({ isActive }) =>
                      isActive ? activeStyle : customStyle
                    }>
                    About Us
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleCloseNavMenu}>
                  {user.email ?
                    <Button variant="text" style={{ textTransform: 'capitalize', color: '#ff3e30', fontSize: '16px' }} onClick={logout}>logout</Button>
                    :
                    <NavLink
                      to="/login"
                      style={({ isActive }) =>
                        isActive ? activeStyle : customStyle
                      }>
                      Login
                    </NavLink>
                  }
                </MenuItem>
              </Box>
            </Menu>
          </Box>

          {/* Small Device Logo*/}
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ color: "#ff3e30", flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            BlogsFeed
          </Typography>

          {/* Large Device */}
          <Box onClick={handleCloseNavMenu} sx={{ ms: 'auto',flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button>
              <NavLink
                to="/home"
                style={({ isActive }) =>
                  isActive ? activeStyle : customStyle
                }>
                Home
              </NavLink>
            </Button>
            <Button>
              <NavLink
                to="/dashboard"
                style={({ isActive }) =>
                  isActive ? activeStyle : customStyle
                }>
                Dashboard
              </NavLink>
            </Button>
            <Button>
              <NavLink
                to="/allBlogs"
                style={({ isActive }) =>
                  isActive ? activeStyle : customStyle
                }>
                Blogs
              </NavLink>
            </Button>
            <Button>
              <NavLink
                to="/aboutUs"
                style={({ isActive }) =>
                  isActive ? activeStyle : customStyle
                }>
                About Us
              </NavLink>
            </Button>
            {user.email ?
              <Button variant="text" style={{ textTransform: 'capitalize', color: '#ff3e30', fontSize: '16px' }} onClick={logout}>logout</Button>
              :
              <Button>
                <NavLink
                  to="/login"
                  style={({ isActive }) =>
                    isActive ? activeStyle : customStyle
                  }>
                  Login
                </NavLink>
              </Button>
            }
          </Box>
			
          <Box sx={{ flexGrow: 0, display: 'flex', alignItems: 'center' }}>
            {user.email && <Typography
              sx={{ color: '#000000', display: { xs: 'none', md: 'inline-block' } }}
              style={{ marginRight: '10px' }}
              variant="subtitle1"
            >
              Hi,{user?.displayName}
            </Typography>}
            <Avatar alt="Remy Sharp" src={user?.photoURL} />
          </Box>
		  
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navigation;
