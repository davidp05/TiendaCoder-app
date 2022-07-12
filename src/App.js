import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import NavBar from "./components/NavBar";
import Cart from './components/Cart/Cart';
import CartCustomProvider from '../src/Context/CartContext'


function App() {
  return (
    <>
    <BrowserRouter>
    < CartCustomProvider>
    <NavBar />
      <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />}/>
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
      </Routes>
      </CartCustomProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
