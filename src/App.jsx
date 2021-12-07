import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailConteiner/itemDetailConteiner";
import { ItemListContainer } from "./components/ItemList/itemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { ProductsProvider } from "./contetx/cartContext";

const App = () => {
  return (
    <BrowserRouter>
     <ProductsProvider> 
       <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />

        <Route path="/category/:catId" element={<ItemListContainer />} />

        <Route path="/product/:itemId" element={<ItemDetailContainer />} />
      </Routes>
      </ProductsProvider>
    </BrowserRouter>
  );
};

export default App;
