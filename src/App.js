import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MarketDetail from "./Components/MarketDetail"
import CryptoTable from './Components/CryptoTable';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='Parent'>
      <MarketDetail className="market"/>
      <CryptoTable className="table"/>
      </div>
    </div>
  );
}

export default App;
