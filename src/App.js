import NavBar from './Components/NavBar/NavBar.jsx'
import {BrowserRouter,Route, Routes } from 'react-router-dom';
import './App.css';
import { ItemListContainer } from './Components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetailContainer/ItemDetailContainer';
import CartWidget from './Components/CartWidget/CartWidget.jsx';

function App() {
  return (
    <div className="App">
            <BrowserRouter> 
         <NavBar/>
         <Routes>
         <Route path="/" element={<ItemListContainer />}/>
         <Route path="/category/:CategoryId" element={<ItemListContainer />}/>
         <Route path="/Item/:idProd" element={<ItemDetailContainer/>}/>
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
