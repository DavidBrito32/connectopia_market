import { Outlet } from "react-router-dom";
import Header from "../../components/Header";
import { styled } from "styled-components";
import Footer from "../../components/footer";

const Public_layout = () => {
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

export default Public_layout;
