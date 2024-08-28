import './App.css'
import Header from './Component/Header'
import ProductPage from './Component/data/products';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar'

function App() {

  return (
    <div className="App">
      {/* Header component */}
      <Header />
      
      {/* Main Content Area */}
      <div className="main-content">
        <Sidebar />
        <Routes>
          <Route path="/" element={<ProductPage />} />
          {/* Add more routes here if needed */}
        </Routes>
      </div>
    </div>
  );
}

export default App
