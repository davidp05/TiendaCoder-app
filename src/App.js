import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Card from './components/card';
import ItemListContainer from './components/ItemListContainer';
import NavBar from "./components/NavBar";

function App() {
  return (
    <BrowserRouter>  
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Bienvenido a la tienda"/>}/>
        <Route path="/detail/:id" element={<ItemListContainer greeting="Bienvenido a la tienda"/>}/>
        <Route path="/category/:categoryId" element={<ItemListContainer greeting="Bienvenido a la tienda"/>}/>
      {/* <Card stock={7}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
