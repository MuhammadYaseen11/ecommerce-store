import { Box, Button, Typography, styled } from "@mui/material";
import ShoppingCart from '@mui/icons-material/ShoppingCart';

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;

  & > * {
    margin-right: 40px;
    font-size: 14px;
    font-weight: bold;
    color: white;
    display: flex;
    align-items: center;
  }
`;

const LoginButton = styled(Button)`
    color: '#2874f0',
    background: '#FFFFFF',
`;


const CustomButtons = () => {
  return (
    <Wrapper>
      <LoginButton variant="contained">Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Box style={{ display: 'flex', alignItems: 'center' }}>
        <ShoppingCart style={{ marginRight: 5 }} />
        <Typography>Cart</Typography>
      </Box>
    </Wrapper>
  );
};

export default CustomButtons;
