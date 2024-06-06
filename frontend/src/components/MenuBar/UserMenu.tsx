import React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAuth } from '../Auth/Auth';

const loggedInSettings = ['Profile', 'Account', 'Dashboard', 'Logout'];
const loggedOutSettings = ['Login', 'Sign Up'];

const UserMenu: React.FC = () => {
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
    const { isLoggedIn, login, logout } = useAuth();

    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleMenuItemClick = (setting: string) => {
        if (setting === 'Logout') {
            logout();
        } else if (setting === 'Login') {
            window.location.href = 'http://localhost:5173/login';
        } else if (setting === 'Sign Up') {
            window.location.href = 'http://localhost:5173/signup';
        }
        handleCloseUserMenu();
    };

    return (
        <Box sx={{ flexGrow: 0 }}>
            {isLoggedIn ? (
                <>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {loggedInSettings.map((setting) => (
                            <MenuItem key={setting} onClick={() => handleMenuItemClick(setting)}>
                                <Typography textAlign="center">{setting}</Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </>
            ) : (
                <Box sx={{ display: 'flex', gap: 1 }}>
                    {loggedOutSettings.map((setting) => (
                        <Button
                            key={setting}
                            onClick={() => handleMenuItemClick(setting)}
                            sx={{ color: 'white' }}
                        >
                            {setting}
                        </Button>
                    ))}
                </Box>
            )}
        </Box>
    );
};

export default UserMenu;
