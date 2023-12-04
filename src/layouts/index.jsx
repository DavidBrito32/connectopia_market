import { Outlet } from "react-router-dom";
import { styled } from "styled-components";
import Header from "../components/header";
import Footer from "../components/footer";

const Publiclayout = () => {
  return (
    <>
      <CotainerLayout>
        <Header />
        <Outlet />
        <Footer />
      </CotainerLayout>
    </>
  );
};

const CotainerLayout = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #1f1f1f;
`;

export  default Publiclayout;

