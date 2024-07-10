//images
//import Logo from "/ecommerce-store/client/src/images/header/seller.png"

import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';

// Components
import Search from '../Header/Search';
import CustomButtons from '../Header/CustomButtons';


const StyledBox = styled(Box)`
  margin-left: 12%;
  line-height: 0;
  align-items: center;
`;
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`;

// const Component = styled(Link)`
//     margin-left: 12%;
//     line-height: 0;
//     color: #FFFFFF;
//     text-decoration: none;
// `;

const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`;

const PlusImage = styled('img')({
    width: 10,
    height: 10,
    marginLeft: 4
})

// const MenuButton = styled(IconButton)(({ theme }) => ({
//     display: 'none',
//     [theme.breakpoints.down('sm')]: {
//         display: 'block'
//     }
// }));




const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
      <Toolbar style={{ padding: 0, minHeight: 55 }}>
        <StyledBox>
          <img src={logoURL} alt="Logo" style={{ width: 75 }} />
          <Box style={{ display: 'flex', alignItems: 'center' }}>
            <SubHeading>
              Explore
              <Box component="span" style={{ color: '#FFE500'}}>
                Plus
              </Box>
            </SubHeading>
            <PlusImage src={subURL} alt="PlusLogo" />
          </Box>
        </StyledBox>
        <Search />
        <Box>
          <CustomButtons />
        </Box>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
