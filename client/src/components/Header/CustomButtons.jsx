import { Box, Button, Typography, styled } from "@mui/material";

import { useState, useContext } from "react";
import ShoppingCart from '@mui/icons-material/ShoppingCart';

//components
import LoginDialog from "../login/LogicDialog.jsx";
import { DataContext } from '../../context/DataProvider.jsx'
import Profile from "./Profile.jsx";

const Container = styled(Box)`
display: flex;
`;
const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;

  & > button, & > p, & > div {
    margin-right: 40px;
    font-size: 14px;
    font-weight: bold;  
    display: flex;
    align-items: center;
  }
`;

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #FFFFFF;  
    text-transform: none;
    font-weight: 600;
    border-radius: 2px;
    padding: 5px 40px;
    height: 32px;
    box-shadow: 'none';
`;


const CustomButtons = () => {

  const [open, setOpen] = useState(false);
  const { account, setAccount } = useContext(DataContext);
  const openDialog = () => {
    setOpen(true);
  }
  return (
    <Wrapper>
      {
        account ? <Profile account={account} setAccount={setAccount} /> :
          <LoginButton variant="contained" onClick={() => openDialog()}>Login</LoginButton>

      }
      <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>
      <Container>
        <ShoppingCart style={{ marginRight: 5 }} />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen} />
    </Wrapper>
  );
};

export default CustomButtons;
