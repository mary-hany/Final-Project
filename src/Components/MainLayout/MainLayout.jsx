import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { CartProvider } from '../CartContext';
export default function Layout() {
  return (
    <div>
      <CartProvider>
      <NavBar />
      <Outlet />
      <Footer />
      </CartProvider>
    </div>
  );
}
