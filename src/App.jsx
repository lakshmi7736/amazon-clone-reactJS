import './App.css'
import Header from './Component/Header'
import { products } from "./Component/data/products";
import ProductGrid from './Component/ProductGrid'
import Sidebar from './Component/Sidebar'

function App() {

  return (
    //BEM convention
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <ProductGrid products={products} />
        </div>
    </div>
  )
}

export default App
