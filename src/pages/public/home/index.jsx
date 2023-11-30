/* eslint-disable no-mixed-spaces-and-tabs */
import BannerRodape from "../../../components/banner-rodape";
import CardProdutos from "../../../components/card-produto";
import Carrousel from "../../../components/carrousel";
import { styled } from "styled-components";

const HomePage = () => {
  return (
    <>
      <ContainerHome>
        <Carrousel />
        <ul>
          <h1>Perifericos Ecohidos a dedo</h1>
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <CardProdutos />
          <h3 id="all">Ver todos os produtos &#10140;</h3>
        </ul>
        <BannerRodape />
      </ContainerHome>
    </>
  );
};

const ContainerHome = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding: 0 50px;
    gap: 50px;
    margin: 50px 0;
    & h1 {
      width: 100%;
      text-align: center;
      color: #fff;
      font-size: 38px;
      font-weight: 400;
      line-height: normal;
    }

    & #all {
      width: 80%;
      text-align: right;
      cursor: pointer;
      color: white;

      &:hover {
        text-decoration: underline;
      }
    }
  }
  @media only screen and (max-width: 480px) {
    & ul {
      padding: 0 0;
      margin: 0 0;
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    & ul {
      padding: 0;
      margin: 0;
    }
  }
`;

export default HomePage;
