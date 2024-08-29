import './App.css';
import Header from './Component/Header';
import {  Route, Routes } from 'react-router-dom';
import Sidebar from './Component/Sidebar';
import SignUp from './Component/Seller/SignUp';
import SignIn from './Component/Seller/SignIn';

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
      {/* <Route path="/products/:seller" element={<Products />} /> */}
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



 {/* <Route path="/*" element={<AdminDashboard />} /> */}

