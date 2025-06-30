import './App.css'
import { NavBar } from './components/layout/NavBar'
import { ItemListContainer } from './components/product/ItemListContainer'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { CategoryProvider } from './context/CategoryContext'
import { CartProvider } from './context/CartContext'
import { TypeWriterComponent } from './components/layout/TypeWritterComponent'
import { SliderComponent } from './components/layout/SliderComponent'
import { ItemDetailContainer } from './components/product/ItemDetailContainer'
import { Checkout } from './components/checkout/Checkout'

function Layout({ children }) {
  const location = useLocation();  

  return (
    <>
      {(location.pathname == "/" || location.pathname.includes("/category")) && (
        <SliderComponent>
          <TypeWriterComponent />
        </SliderComponent>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <CategoryProvider>
          <header>
            <NavBar />
          </header>

          <main>
            <Layout />
              <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/item/:itemId" element={<ItemDetailContainer />} />
              </Routes>
          </main>
        </CategoryProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App;
