import './App.css';
import Header from './Component/Header';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import SignUp from './Component/Seller/SignUp';
import SignIn from './Component/Seller/SignIn';
import AdminDashboard from './Component/Admin/AdminDashboard';
import Adminlogin from './Component/Admin/Adminlogin';
import Products from './Component/Seller/Products';


function App() {
  return (
      <Routes>
        <Route
          path="/signup"
          element={
            <div className="App">
              <SignUp />
            </div>
          }
        />
        <Route
          path="/signin"
          element={
            <div className="App">
              <SignIn />
            </div>
          }
        />
        <Route
          path="/adminLogin"
          element={
            <div className="App">
              <Adminlogin />
            </div>
          }
        />
      <Route path='/products/:seller' element={<Products />} />
      <Route path="/adminDashboard/*" element={<AdminDashboard />} />
        <Route
          path="/"
          element={
            // Render main app layout with Header and Sidebar
            <div className="App">
              <Header />
              <div className="main-content">
                <Sidebar />
              </div>
            </div>
          }
        />
      </Routes>
  );
}

export default App;




