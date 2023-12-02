import { Outlet } from "react-router-dom/";
import Header from "../components/header/";
import { styled } from "styled-components/";
import Footer from "../components/footer/";

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

// eslint-disable-next-line react-refresh/only-export-components
const CotainerLayout = styled.div`
  overflow-x: hidden;
  min-height: 100vh;
  background-color: #1f1f1f;
`;

export default Publiclayout;
