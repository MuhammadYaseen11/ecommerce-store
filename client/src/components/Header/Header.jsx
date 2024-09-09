//images
//import Logo from "/ecommerce-store/client/src/images/header/seller.png"

import { AppBar, Toolbar, Box, Typography, styled } from '@mui/material';

// Components
import Search from '../Header/Search';
import CustomButtons from '../Header/CustomButtons';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
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

const CustomButtonWrapper = styled(Box)`
margin: 0 5% 0 auto;
`;




const Header = () => {
  const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
        <Toolbar>
            <StyledBox>
                {/* <img src={logoURL} alt="Logo" style={{width: 75}}/> */}
                <div>Logo</div>
                {/* <Box style={{display: 'flex'}}>
                    <SubHeading>Explore 
                        <Box component="span" style={{color: '#FFE500'}}> Plus
                        </Box>
                        </SubHeading> */}
                        {/* <PlusImage src={subURL} alt="PlusLogo"/> */}
                {/* </Box> */}
            </StyledBox>
            <Search/>
            <CustomButtonWrapper>
                <CustomButtons/>
            </CustomButtonWrapper>
        </Toolbar>
    </StyledHeader>
)
}

export default Header;
