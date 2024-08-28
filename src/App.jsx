import { Route, Routes } from 'react-router-dom';
import './App.css'

import AdminDashboard from './Component/Admin/AdminDashboard';
// import Header from './Component/Header'
// import ProductPage from './Component/data/products';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Component/Sidebar'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/*" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

      {/* <CategoryForm />
      <CategoryList /> */}

      {/* commenting to check with admin */}
        {/* Header component */}
          {/* <Header />
          <div className="main-content">
            <Sidebar />
            <Routes>
              <Route path="/" element={<ProductPage />} />
            </Routes>
          </div> */}
      {/* commenting to check with admin */}


export default App
