import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Publiclayout } from "../layouts/";
import HomePage from "../pages/public/home";
import ErrorPage from "../pages/Error";
import Products from "../pages/public/products";
import MeusPedidos from "../pages/public/meus-pedidos";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Publiclayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/meus-pedidos" element={<MeusPedidos />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
