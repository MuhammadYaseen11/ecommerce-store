import { useState } from 'react';

//import { Link } from 'react-router-dom';
import { Typography, Menu, MenuItem, Box, styled } from '@mui/material';
import { PowerSettingsNew } from '@mui/icons-material';

const Component = styled(Menu)`
    margin-top: 5px;
`;

const Logout = styled(Typography)`
    font-size: 14px;
    margin-left: 20px;
`;

const Profile = ({ account, setAccount }) => {
    const [open, setOpen] = useState(false);
    
    const handleClick = (event) => {
        setOpen(event.currentTarget);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const logout = () => {
        setAccount('');
    }
    
    return (
        <>
            <Box onClick={handleClick}><Typography style={{ marginTop: 2 }}>{account}</Typography></Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logout();}}>
                    <PowerSettingsNew fontSize='small' color='primary'/> {/* // this is used for the icon with power icon with logout dropdown. Also Comments inside children section of tag should be placed inside braces {/* and the opposite of this -{/*- */}
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )    
}

export default Profile;