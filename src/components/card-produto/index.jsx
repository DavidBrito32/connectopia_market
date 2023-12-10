import { useState } from "react";
import img from "./assets/rtx 4090.svg";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";

import { styled } from "styled-components";

const CardProdutos = () => {
  const [collection, setCollection] = useState({
    like: false,
  });

  const like = () => setCollection({ ...collection, like: !collection.like });


  return (
    <Li>
      <div className="img">
        {collection.like ? (
          <FaHeart onClick={like} title="favoritar" className="coracao" />
        ) : (
          <FaRegHeart onClick={like} title="favoritar" className="coracao" />
        )}

        <img src={img} alt="" />
      </div>
      <h4>Hardware</h4>
      <h2>RTX 4090 TI Founders Edition Nvidea</h2>
      <p>
        Hub USB C 6 em 1: o adaptador UGREEN USB C para USB tem uma porta de
        saída USB C para HDMI 4K @60Hz, 3 portas USB 3.0 ...
      </p>
      <div className="price">
        <h3>
          R$: 2.560,00 <span>R$: 3.230,00</span>
        </h3>
        <Link to={"/products-details"}>Ver mais &#10140;</Link>
      </div>
      <div className="actions">
        <button>Comprar Agora</button>
        <FiShoppingBag title="adicionar ao carrinho" className="cart-icon" />
      </div>
    </Li>
  );
};

const Li = styled.li`
  width: 270px;
  height: 370px;
  border: 2px solid #24ff00;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  transition-duration: 200ms;

  &:hover {
    scale: 1.03;
    box-shadow: 1px 1px 20px -10px white;
  }

  & .img {
    width: 100%;
    height: 50%;
    position: relative;

    & .coracao {
      width: 30px;
      height: 30px;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #e5ea0f;
      right: 5px;
      top: 10px;
      cursor: pointer;
      transition: all 300ms;

      &:hover {
        scale: 1.1;
      }
      &:active {
        scale: 0.97;
      }
    }

    & img {
      width: 100%;
      height: 100%;
      display: block;
      object-fit: contain;
    }
  }

  & h4 {
    color: #fff;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    margin: 5px 0;
  }
  & h2 {
    font-size: 18px;
    font-weight: bold;
    color: white;
    text-transform: capitalize;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin-bottom: 5px;
  }
  & p {
    color: #fff;
    font-size: 13px;
    font-weight: 400;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-align: justify;
  }

  & .price {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 10px 0 5px;
    align-items: flex-start;
    & h3 {
      color: white;
      font-size: 16px;
      font-weight: bold;
      & span {
        font-size: 12px;
        display: block;
        color: gray;
        text-decoration: line-through;
        text-align: right;
      }
    }

    & a {
      color: #fff;
      font-size: 16px;
      font-weight: 300;
      transition: all 300ms;

      &:hover {
        text-decoration: underline;
        color: #24ff00;
      }
    }
  }

  & .actions {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;

    & button {
      flex: 1;
      height: 25px;
      border-radius: 8px;
      font-size: 14px;
      font-weight: 500;
      border: none;
      cursor: pointer;
      transition: all 200ms;

      &:active {
        background-color: #24ff00;
        color: white;
        scale: 0.97;
      }
    }

    & .cart-icon {
      width: 25px;
      height: 25px;
      color: white;
      cursor: pointer;
      transition: all 200ms;

      &:hover {
        color: #e5ea0f;
        scale: 1.1;
      }
      &:active {
        color: #24ff00;
        scale: 0.97;
      }
    }
  }
`;

export default CardProdutos;
