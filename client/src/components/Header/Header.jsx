//images
//import Logo from "/ecommerce-store/client/src/images/header/seller.png"
import { useState } from 'react';

import { AppBar, Toolbar, Box, IconButton, Typography, styled } from '@mui/material';
import { Menu } from '@mui/icons-material';

import { Link } from 'react-router-dom';

// Components
import Search from '../Header/Search';
import CustomButtons from '../Header/CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;
const Component = styled(Link)`
    margin-left: 12%;
    line-height: 0;
    color: #FFFFFF;
    text-decoration: none;
`;

const StyledBox = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`;
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

//to be used in paranthesis like this styled('')({})
const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
});

const MenuButton = styled(IconButton)(({ theme }) => ({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
    }
}));

const CustomButtonWrapper = styled('span')(({ theme }) => ({ 
    margin: '0 5% 0 auto', 
    [theme.breakpoints.down('sm')]: {
        display: 'none'
    }
}));




const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
  const [open, setOpen] = useState(false);

  const handleClose = () => {
      setOpen(false);
  }

  const handleOpen = () => {
      setOpen(true);
  }

  return (
    <StyledHeader>
        <Toolbar>
        <MenuButton
                    color="inherit"
                    onClick={handleOpen}
                >
                    <Menu />
                </MenuButton>
        <Component to='/'>
                    <img src={logoURL} style={{ width: 75 }} />
                    <Box component="span" style={{ display: 'flex' }}>
                        <SubHeading>Explore&nbsp;
                            <Box component="span" style={{color:'#FFE500'}}>
                                Plus
                            </Box>
                        </SubHeading>
                        <PlusImage src={subURL} />
                    </Box>
                </Component>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
)
}

export default Header;
