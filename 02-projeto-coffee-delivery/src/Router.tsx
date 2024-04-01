import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { CartPage } from "./pages/Cart/Cart";
import { Checkout } from "./pages/Checkout/Checkout";
import { Home } from "./pages/Home/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
}
