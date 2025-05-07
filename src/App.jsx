import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import AllProducts from './pages/AllProducts'
import Products from './pages/Products'
import Header from './components/Header'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'

function App() {
  return <BrowserRouter>
  <Header />
  <hr/>
<Routes >
  <Route path='/' element={<AllProducts />} />
  <Route path='/product/:id' element={<Products />} />
  <Route path='/cart' element={<Cart />} />
  <Route path='*' element={<NotFound />} />
</Routes>
</BrowserRouter>
  
}

export default App
