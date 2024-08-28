import './App.css'
import Categories from './Component/Admin/Categories';
import SubCategories from './Component/Admin/Subcategories';
import NestedSubCategories from './Component/Admin/NestedSubCategories';
// import Header from './Component/Header'
// import ProductPage from './Component/data/products';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Sidebar from './Component/Sidebar'

function App() {

  return (
    <div className="App">
      <Categories />
      <SubCategories />
      <NestedSubCategories />
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

    </div>
  );
}

export default App
