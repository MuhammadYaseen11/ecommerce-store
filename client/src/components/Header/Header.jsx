
//images
import Logo from "/ecommerce-store/client/src/images/header/seller.png"


import {AppBar, Toolbar, Box, styled} from '@mui/material';

const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`

const StyledBox = styled(Box)`
    margin-left: 3%;
`

const Header = () => {
    return (
        <StyledHeader>
            <Toolbar>
                <StyledBox>
                    <img src={Logo} alt="Logo" style={{width: 45}}/>
                </StyledBox>

            </Toolbar>
        </StyledHeader>
    )
}

export default Header;