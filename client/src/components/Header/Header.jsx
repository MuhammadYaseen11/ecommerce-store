
//images
import Logo from "/ecommerce-store/client/src/images/header/seller.png"


import {AppBar, Toolbar, Box, Typography, styled} from '@mui/material';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`

const StyledBox = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`
const SubHeading = styled(Typography)`
    font-size: 10px;
    font-style: italic;
`
const PlusImage = styled(img)

const Header = () => {

    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';
    return (
        <StyledHeader>
            <Toolbar>
                <StyledBox>
                    <img src={logoURL} alt="Logo" style={{width: 75}}/>
                    <Box>
                        <SubHeading>Explore 
                            <Box component="span" style={{color: '#FFE500'}}> Plus
                            </Box>
                            </SubHeading>
                            <img src={subURL} />
                    </Box>
                </StyledBox>

            </Toolbar>
        </StyledHeader>
    )
}

export default Header;