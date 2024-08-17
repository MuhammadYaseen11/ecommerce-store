//import logo from './logo.svg';
import './App.css';

//components
import Header from './components/Header/Header';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider';
function App() {
  return (
    <DataProvider>
      <Header />
      <Home />

    </DataProvider>
  );
}

export default App;
