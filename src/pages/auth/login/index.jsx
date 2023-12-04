import { useState } from "react";
import Logo from "./assets/CONNECTOPIA.svg";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { FcGoogle } from "react-icons/fc";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const [flags, setFlegs] = useState({
    isLogged: false,
    password: false,
  });
  const isLogged = () => setFlegs({ ...flags, isLogged: !flags.isLogged });
  const password = () => setFlegs({ ...flags, password: !flags.password });
  return (
    <>
      <Login>
        <form>
          <h3>Faça Login para aproveitar todas as promoções</h3>
          <label htmlFor="email" id="email">
            <span>E-mail:</span>
            <input
              type="email"
              placeholder="Informe seu email de cadastro"
              required
            />
          </label>
          <label htmlFor="password" id="password">
            <span>Informe sua senha:</span>
            <input
              type={flags.password ? "text" : "password"}
              placeholder="Informe seu email de cadastro"
              required
            />
            {flags.password ? (
              <FaRegEyeSlash onClick={password} className="password" />
            ) : (
              <FaRegEye onClick={password} className="password" />
            )}
          </label>

          <div className="logged">
            <div className="opt">
              <div className="btn-box" onClick={isLogged}>
                <div
                  className={flags.isLogged ? "clicked active" : "clicked"}
                ></div>
              </div>
              <span>Permanecer Logado?</span>
            </div>
            <Link>Esqueceu a senha?</Link>
          </div>
          <div className="social">
            <h3>Acessar com:</h3>
            <FcGoogle className={"social_media"} />
            <FaMeta className={"social_media"} />
            <FaXTwitter className={"social_media"} />
          </div>

          <h4>
            Não possui cadastro? <Link>Crie sua conta agora mesmo</Link>
          </h4>

          <button>Entrar</button>
        </form>

        <img src={Logo} alt="" />
      </Login>
    </>
  );
};

const Login = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2c2c2c;
  display: flex;
  justify-content: center;
  gap: 100px;
  align-items: center;

  & form {
    width: 500px;
    background-color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    padding: 34px 30px;

    & h3 {
      font-size: 2rem;
      font-weight: bolder;
      text-align: center;
    }

    & label {
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 5px;
      margin: 15px 0;
      position: relative;
      & span {
        font-size: 18px;
        font-weight: bolder;
      }
      & input {
        width: 100%;
        height: 55px;
        border-radius: 8px;
        background-color: #e3e1e1;
        border: none;
        color: #000000;
        font-weight: bolder;
        padding-left: 20px;
        &::placeholder {
          color: #444444;
          font-weight: bold;
        }
      }

      & .password {
        width: 25px;
        height: 25px;
        position: absolute;
        bottom: 15px;
        right: 25px;
        cursor: pointer;
        transition-duration: 200ms;
      }
    }

    & .logged {
      width: 100%;
      display: flex;
      justify-content: space-between;
      & .opt {
        display: flex;
        gap: 5px;
        align-items: center;
        & .btn-box {
          width: 20px;
          height: 20px;
          background-color: #1f1f1f85;
          cursor: pointer;
          position: relative;
          transition-duration: 200ms;
          overflow: hidden;
          &:hover {
            background-color: #1f1f1f55;
          }

          & .clicked {
            width: 0%;
            height: 0;
            transition-duration: 200ms;

            &.active {
              width: 70%;
              height: 8px;
              border-left: 3px solid #ffffff;
              border-bottom: 3px solid #ffffff;
              position: absolute;
              rotate: 0deg;
              top: 40%;
              left: 45%;
              transform: translate(-40%, -45%) rotate(-45deg);
            }
          }
        }
      }

      & a {
        color: red;
        font-weight: bold;
      }
    }

    & .social {
      width: 100%;
      display: flex;
      align-items: center;
      margin: 20px 0;
      gap: 5px;
      & h3 {
        font-size: 16px;
        font-weight: bolder;
      }

      & .social_media {
        width: 25px;
        height: 25px;
        cursor: pointer;
        transition-duration: 200ms;

        &:active {
          scale: 0.9;
        }
      }
    }

    & h4 {
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
      & a {
        color: blue;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    & button {
      width: 100%;
      height: 55px;
      border: none;
      background-color: #398b50;
      color: white;
      font-size: 28px;
      font-weight: bolder;
      border-radius: 8px;
      margin-top: 40px;
      cursor: pointer;
      transition-duration: 250ms;
      &:hover {
        background-color: #265d35;
      }
      &:active {
        scale: 0.97;
      }
    }
  }

  & img {
    width: 500px;
    height: 500px;
    object-fit: contain;
  }
`;

export default LoginPage;
