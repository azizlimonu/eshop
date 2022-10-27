import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home, Contact, Login, Cart, Register, Reset, Admin } from "./pages";
import { Header, Footer } from './components'
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import AdminOnlyRoute from "./components/adminOnlyRoute/AdminOnlyRoute";

function App() {
  return (
    <>
      <Header />
      <ToastContainer autoClose={2000} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/reset' element={<Reset />} />

        {/* descendants routes */}
        <Route path='/admin/*'
          element={
            <AdminOnlyRoute>
              <Admin />
            </AdminOnlyRoute>
          }
        />

        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
