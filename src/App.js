import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { Navbar } from './components/Navbar/Navbar';
import { Home } from './pages/Home/Home';
import { Cart } from './pages/Cart/Cart';
import { CartContextProvider } from './Contexts/cartContext'

function App() {
  return (
    <div className="App">
     <CartContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
        </Routes>
      </Router>
      </CartContextProvider>
    </div>
  );
}

export default App;
