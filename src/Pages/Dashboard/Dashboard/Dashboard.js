import MenuIcon from '@mui/icons-material/Menu';
import { Button, List, ListItem, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth/useAuth';

const linkStyle={
	textDecoration: 'none', color:'#000000', fontWeight:'500'
}

// dashboard drawer
const drawerWidth = 200;
function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { logout, admin, user } = useAuth();
    
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            {!admin && <List>
                <ListItem  button >
                    <ListItemText>
						<Link style={linkStyle} to="/">
								Home
						</Link>
					</ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button>
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/postBlog`}>Post a Blog</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                    <Button sx={{backgroundColor:'#ff3e30'}}  onClick={logout} variant="contained">logout</Button>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>}
            {admin && <List>
                <ListItem  button >
					<ListItemText>
						<Link style={linkStyle} to="/">
								Home
						</Link>
					</ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/makeAdmin`}>Make Admin</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                        <Link style={linkStyle} to={`/dashboard/manageBlogs`}>Manage All Blogs</Link>
                    </ListItemText>
                </ListItem>
                <Divider />
                <ListItem  button >
                    <ListItemText>
                    <Button onClick={logout} sx={{backgroundColor:'#ff3e30'}} variant="contained">logout</Button>
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, background: '#ff3e30'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                    >
                        <MenuIcon sx={{ mr: 4, display: { sm: 'block', md: 'none' } }} />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Box sx={{ p: 5 }} >
                    <Typography variant="h4" gutterBottom component="div">
                        Welcome to Your Dashboard
                    </Typography>
                    <Typography variant="h5" gutterBottom component="div">
                        {user.displayName}
                    </Typography>
                </Box>
                <Outlet />
            </Box>
        </Box>
    );
};

export default Dashboard;
