import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Publiclayout from "../layouts/";
import HomePage from "../pages/public/home";
import ErrorPage from "../pages/Error";
import Products from "../pages/public/products";
import MeusPedidos from "../pages/public/meus-pedidos";
import LoginPage from "../pages/auth/login";
import CadastroPage from "../pages/auth/cadastro";

const Router = () => {
  const location = useLocation();
  return (
    <>
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Publiclayout />}>
            <Route index element={<HomePage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/meus-pedidos" element={<MeusPedidos />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cadastro" element={<CadastroPage />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default Router;
