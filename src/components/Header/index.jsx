import { useState } from "react";
import styled from "styled-components";
import user from "./assets/user.png";
import conn from "./assets/logo.svg";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import CardCart from "./Card-Cart-items";
import { useNavigate } from 'react-router-dom';
import { FaHeart } from 'react-icons/fa';

const Header = () => {
  const [toogle, setToogle] = useState({
    cart: false,
    burguer: false,
    profile: false,
  });

  const navigate = useNavigate();

  const toogleCart = () =>
    setToogle({
      ...toogle,
      cart: !toogle.cart,
      burguer: false,
      profile: false,
    });

  const toogleBurguer = () =>
    setToogle({
      ...toogle,
      burguer: !toogle.burguer,
      cart: false,
      profile: false,
    });

  const toogleProfile = () =>
    setToogle({
      ...toogle,
      profile: !toogle.profile,
      cart: false,
      burguer: false,
    });

  return (
    <>
      <ContainerHeader>
        <Logo src={conn} alt="Logomarca da empresa" />

        <div
          onClick={toogleBurguer}
          className={toogle.burguer ? "burger active" : "burger"}
        >
          z<span></span>
          <span></span>
          <span></span>
        </div>

        <nav>
          <ul className={toogle.burguer ? "active" : ""}>
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/products"}>Products</NavLink>
            </li>
            <li>
              <NavLink to={"/meus-pedidos"}>Meus Pedidos</NavLink>
            </li>
          </ul>

          <div className="cart-container">
            <span className="icon-cart">
              {/* <FaHeart className="cart" /> */}
              <AiOutlineShoppingCart onClick={toogleCart} className="cart" />
              <span>1</span>
            </span>

            <div className={toogle.cart ? "cart-items active" : "cart-items"}>
              <ul>
                <CardCart />
                <CardCart />
              </ul>

              <h3>
                TOTAL DO CARRINHO: <span>{`R$: 3.500,00`}</span>
              </h3>
              <Link onClick={toogleCart} to={"/meus-pedidos"}>Ir para o carrinho</Link>
                <h4>Ou</h4>
              <button>Prosseguir ao pagamento</button>
            </div>
          </div>

          <div className={toogle.burguer ? "login active" : "login"}>
            <img onClick={toogleProfile} src={user} alt="user" />
            <span>login</span>
            <div className={toogle.profile ? "menu active" : "menu"}>
              <h3>Bem vindo</h3>
              <h4>Entre ou cadastre-se</h4>
              <span>
                <button onClick={() => navigate("/login")}>Entrar</button> - <button onClick={() => navigate("/cadastro")}>cadastre-se</button>
              </span>
            </div>
          </div>
        </nav>
      </ContainerHeader>
    </>
  );
};

const ContainerHeader = styled.header`
  width: 100%;
  height: 116px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 0 30px;
  z-index: 10000;

  & ul {
    display: flex;
    gap: 30px;
    font-size: 1.3rem;
    transition-duration: 400ms;
    overflow-x: hidden;
    height: 100%;
    align-items: center;
    & a {
      color: white;
      transition-duration: 400ms;
      text-decoration: underline;
      text-decoration-color: transparent;
      &:hover {
        color: yellow;
      }
      &.active {
        color: yellow;
        transition-duration: 400ms;
        text-decoration: underline;
        text-underline-offset: 10px;
      }
    }
  }

  & .burger {
    width: 30px;
    height: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition-duration: 400ms;
    position: relative;
    visibility: hidden;
    opacity: 0;

    & span {
      width: 100%;
      height: 3px;
      background-color: white;
      transition-duration: 400ms;
    }

    &:active {
      scale: 0.97;
    }

    &.active {
      & span {
        position: absolute;
        &:first-child {
          top: 65%;
          rotate: -45deg;
        }
        &:nth-child(2) {
          width: 0;
        }
        &:last-child {
          top: 65%;
          rotate: 45deg;
        }
      }
    }
  }

  & nav {
    display: flex;
    height: 100%;
    gap: 40px;
    align-items: center;
    color: white;

    & .cart-container {
      position: relative;
      z-index: 10;

      & .icon-cart {
        & span {
          transition-duration: 400ms;
          position: absolute;
          line-height: 16px;
          min-width: 16px;
          top: -5px;
          right: -5px;
          font-weight: bold;
          border-radius: 50%;
          background-color: yellow;
          padding: 0 4px;
          font-size: 10px;
          border-radius: 10px;
          text-align: center;
          color: black;
        }
      }

      & .cart {
        width: 30px;
        height: 30px;
        color: #00ff0d;
        cursor: pointer;
        transition-duration: 100ms;
        &:hover {
          scale: 1.1;
          color: yellow;
        }
        &:active {
          scale: 0.97;
        }
      }

      & .cart-items {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 5px;
        width: 350px;
        height: 0px;
        visibility: hidden;
        opacity: 0;
        background-color: #00000055;
        backdrop-filter: blur(5px);
        right: -100px;
        top: 75px;
        box-shadow: -8px 11px 16px 0px rgba(0, 0, 0, 0.35);
        -webkit-box-shadow: -8px 11px 16px 0px rgba(0, 0, 0, 0.35);
        -moz-box-shadow: -8px 11px 16px 0px rgba(0, 0, 0, 0.35);
        padding: 5px 6px;
        overflow: hidden;
        transition-duration: 400ms;

        &.active {
          height: 450px;
          visibility: visible;
          opacity: 1;
        }

        & ul {
          padding: 5px 0;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 400px;
          gap: 12px;
          max-height: 280px;
          overflow-y: auto;
          border-bottom: 5px solid black;

          &::-webkit-scrollbar {
            width: 5px;
            background-color: #00000066;
          }
          &::-webkit-scrollbar-thumb {
            background-color: #b30047;
          }
        }

        & h3 {
          font-size: 14px;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
        }

        & h4{
          text-align: center;
        }

        & a{
          width: 100%;
          padding: 10px 15px;
          border: 2px solid #00ff0d;
          color: white;
          text-align: center;
          border-radius: 8px;
            &:hover{
              background-color: #FFFFFF25;
            }
        }

        & button {
          margin-top: 10px;
          padding: 10px 15px;
          background-color: black;
          color: white;
          font-weight: bold;
          border: none;
          border-radius: 8px;
          text-transform: uppercase;
          cursor: pointer;
          transition-duration: 200ms;
          &:active {
            scale: 0.97;
          }
          &:hover {
            opacity: 0.8;
          }
        }
      }
    }

    & .login {
      display: flex;
      flex-direction: column;
      color: white;
      align-items: center;
      position: relative;
      transition-duration: 400ms;
      &.active {
        visibility: visible;
        opacity: 1;
        z-index: 10;
        flex-direction: row;
        gap: 40px;
        background-color: #00000099;
        width: 60%;
        justify-content: center;
        padding: 20px 0;
      }

      & img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;

        &:active {
          scale: 0.97;
        }
      }

      & .menu {
        position: absolute;
        width: 250px;
        height: 0px;
        overflow: hidden;
        background-color: #00000055;
        backdrop-filter: blur(5px);
        top: 86px;
        right: -10px;
        box-shadow: -8px 11px 16px 0px rgba(0, 0, 0, 0.35);
        -webkit-box-shadow: -8px 11px 16px 0px rgba(0, 0, 0, 0.35);
        -moz-box-shadow: -8px 11px 16px 0px rgba(0, 0, 0, 0.35);
        padding: 10px 10px;
        display: flex;
        flex-direction: column;
        visibility: hidden;
        opacity: 0;
        transition-duration: 300ms;
        z-index: 10;
        overflow: hidden;

        &.active {
          visibility: visible;
          opacity: 1;
          height: 200px;
        }

        & h3 {
          text-align: center;
          margin-bottom: 10px;
        }

        & h4 {
          margin-bottom: 30px;
        }

        & button {
          width: 46%;
          height: 30px;
          background-color: black;
          border: 2px solid #00ff0d;
          border-radius: 4px;
          color: white;
          cursor: pointer;

          &:active {
            scale: 0.97;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 0 20px;

    & .burger {
      visibility: visible;
      height: 40px;
      opacity: 1;
      position: absolute;
      right: 60px;
      top: 40%;
      transform: translateY(-50%);
    }

    & nav {
      & ul {
        position: absolute;
        flex-direction: column;
        right: 1;
        top: 107px;
        z-index: 10;
        background-color: #00000099;
        width: 0;
        height: calc(100vh - 107px);
        right: 0;
        text-align: right;
        padding: 100px 10px 0;
        visibility: hidden;
        opacity: 0;
        font-size: 24px;
        overflow: hidden;

        &.active {
          visibility: visible;
          opacity: 1;
          width: 60%;
        }
      }

      & .cart-container {
        & .cart-items {
          width: 300px;
          right: 0px;
          top: 75px;
          justify-content: space-around;

          & ul {
            position: static;
            visibility: visible;
            opacity: 1;
            height: 400px;
          }
        }
      }
      & .login {
        position: absolute;
        visibility: hidden;
        opacity: 0;
        top: 116px;
        right: 0px;
        width: 0;
      }
    }
  }
`;

const Logo = styled.img`
  width: 164px;
  display: block;
  transition-duration: 400ms;

  @media only screen and (max-width: 480px) {
    width: 100px;
  }
  @media only screen and (max-width: 768px) {
    width: 128px;
  }
`;

export default Header;
