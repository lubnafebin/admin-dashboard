import "./index.scss";
import { Route, Routes, Outlet } from "react-router-dom";
import { Footer } from "./components/footer/Footer";
import { Menu } from "./components/menu/Menu";
import { Navbar } from "./components/navbar/Navbar";
import { Home } from "./pages/home/Home";
import { Users } from "./pages/users/Users";
import { Products } from "./pages/products/Products";
import { Login } from "./pages/login/Login";
import { User } from "./pages/user/User";
import { Product } from "./pages/product/product";

export default function App() {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="ContentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Products />} />
        <Route path="users/:id" element={<User />} />
        <Route path="products/:id" element={<Product />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
