import { Link } from "react-router-dom";
import { styled } from "styled-components";
import CardProdutos from "../../../components/card-produto";
const Products = () => {
  return (
    <>
      <ContainerProducts>
        <div className="menu">
          <div className="selects">
            <select name="brandSelect" id="">
              <option value="" defaultChecked>
                Selecionar por marca
              </option>
              <optgroup label="Especiais">
                <option value="Nike">Nike</option>
                <option value="Maresia">Maresia</option>
                <option value="East Coast">East Coast</option>
                <option value="Lacoste">Lacoste</option>
              </optgroup>
              <optgroup label="Comuns">
                <option value="Renner">Renner</option>
                <option value="Marisa">Marisa</option>
                <option value="C&A">C & A</option>
                <option value="Baratão">Baratão</option>
              </optgroup>
            </select>

            <select name="price" id="price">
              <option value="maior">Do menor para o maior</option>
              <option value="menor">Do maior para o menor</option>
            </select>
          </div>

          <Link>Ver mais produtos ➡️</Link>
        </div>

        <div className="hr"></div>

        <ul>
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
            <CardProdutos />
        </ul>
      </ContainerProducts>
    </>
  );
};

const ContainerProducts = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 45px 50px 0;

  & .menu {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    & .selects {
      display: flex;
      gap: 15px;
      & select {
        width: 200px;
        height: 30px;
        text-align: center;
        border: 2px solid #24ff00;
        background-color: transparent;
        color: white;
        font-weight: bold;
        cursor: pointer;
        font-size: 14px;

        & option {
          color: black;
          cursor: pointer;
        }

        & optgroup {
          color: red;
        }
      }
    }

    & a {
      font-size: 18px;
      color: white;
      font-weight: 700;
      transition-duration: 300ms;
      &:hover {
        text-decoration: underline;
        text-underline-offset: 10px;
        color: yellow;
      }
    }
  }

  & .hr{
    width: 100%;
    margin-top: 50px;
    height: 4px;
    border-radius: 8px;
    background-color: white;
  }

  & ul{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-bottom: 50px;
  }

  @media only screen and (max-width: 480px) {
    padding: 30px 10px 0;

    & .menu {
      justify-content: center;
      gap: 20px;
      & .selects {
        & select {
          width: calc(100% / 2);
          font-size: 12px;
        }
      }
    }
  }
`;

export default Products;
