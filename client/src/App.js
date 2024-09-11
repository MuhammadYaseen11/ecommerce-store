//import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/home/Home';
import DetailView from './components/itemDetails/DetailView';
import DataProvider from './context/DataProvider';
import Cart from './components/cart/Cart';
//BrowserRouter is used to enable routing in overall project
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import {Box} from '@mui/material';
function App() {
  return (
    <DataProvider>
      <BrowserRouter>
      <Header />
      <Box style={{marginTop: 54}}>
      <Routes>
              <Route path= '/' element={<Home />} />
              <Route path= '/cart' element={<Cart />} />
              <Route path= '/product/:id' element={<DetailView />} />
            </Routes>
      </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
