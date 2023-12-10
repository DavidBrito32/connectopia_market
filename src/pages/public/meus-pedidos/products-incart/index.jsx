import { styled } from "styled-components";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegStarHalf } from "react-icons/fa6";
import Logo from "./assets/mouse gamer.svg";

const ProductsInCart = () => {
  return (
    <>
      <Container>
        <img src={Logo} alt="imagem" />
        <div className="product">
          <h2>#Product Name</h2>
          <h3>
            Data: <span>05/12/2023</span>
          </h3>
          <h3>
            Order <span>#454545</span>
          </h3>
          <h3>
            Quantidade:{" "}
            <span>
              {" "}
              <button> - </button> X 1 <button> + </button>
            </span>
          </h3>
          <h3>
            Valor: <span>R$: 3.200,00</span>
          </h3>
          <h3>Status: <span>aguardando pagamento</span></h3>
          <h3>
            Remover produto? <FaRegTrashAlt className="excluir" />
          </h3>
        </div>
        <div className="reviews">
          <h4>Avaliações deste produto</h4>
          <div className="icons">
            <FaStar className="stars" />
            <FaStar className="stars" />
            <FaStar className="stars" />
            <FaStar className="stars" />
            <FaRegStarHalf className="stars" />
            <span>(90 avaliações)</span>
          </div>
        </div>
      </Container>
    </>
  );
};

const Container = styled.li`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-around;
  border-radius: 8px;
  gap: 20px;
  padding: 15px 5px;

  & img {
    width: 200px;
    height: 100%;
    object-fit: contain;
  }

  & .product {
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 10px;

    & h2{
        font-size: 18px;
    }

    & h3 {
      color: black;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 25px;

      & span {
        color: red;
      }

      & button {
        width: 25px;
        height: 25px;
        padding-bottom: 2px;
        border-radius: 50%;
        border: 2px solid #00ff11;
        background-color: black;
        color: white;
        font-weight: bold;
        font-size: 16px;
        cursor: pointer;
        transition-duration: 100ms;

        &:active {
          scale: 0.9;
        }
      }
      & .excluir {
        width: 25px;
        height: 25px;
        cursor: pointer;
        transition-duration: 100ms;

        &:active {
          scale: 0.9;
        }
        &:hover {
          color: red;
        }
      }
    }
  }

  & .reviews {
    & h4 {
      font-size: 16px;
      display: flex;
      flex-direction: column;
    }

    & .icons {
      display: flex;
      align-items: center;
      & .stars {
        fill: #ffa200;
        width: 20px;
        height: 20px;
      }

      & span {
        font-size: 10px;
        font-style: italic;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
          text-underline-offset: 3px;
        }
      }
    }
  }


  @media only screen and (max-width: 768px){
    & img{
      width: 150px;
    }

    & .product{
      & h2{
        font-size: 14px;
      }

      & h3{
        font-size: 12px;
      }
    }

    & .reviews{
      display: none;
    }
  }
`;

export default ProductsInCart;
