import { styled } from "styled-components";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./assets/CONNECTOPIA.svg";
import { useForm } from "../../../hooks/useForm";
import { motion } from "framer-motion";

const CadastroPage = () => {
  const [flags, setFlags] = useState({
    password: false,
    confirmPassword: false,
  });

  const { form, handleForm, clearForm } = useForm({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    clearForm();

    if (form.password === form.confirmPassword) {
      console.log(form);
    } else {
      console.log("Verifique os dados: senha ou e-mail incorretos");
    }
  };

  const password = () => setFlags({ ...flags, password: !flags.password });
  const confirmPassword = () =>
    setFlags({ ...flags, confirmPassword: !flags.confirmPassword });

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ContainerCadastro>
          <img src={Logo} alt="Logomarca Connectopia" />
          <form onSubmit={handleSubmit}>
            <h3>
              Olá! 👋👋 Seja bem vindo! Realize seu Cadastro e aproveite todas
              as nossas promoções
            </h3>
            <label htmlFor="name">
              <span>Informe seu nome:</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleForm}
                required
                placeholder="Informe seu nome completo"
              />
            </label>
            <label htmlFor="email">
              <span>Informe seu e-mail:</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                required
                placeholder="Informe seu melhor e-mail"
              />
            </label>
            <label htmlFor="password">
              <span>Crie sua senha:</span>
              <input
                type={flags.password ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleForm}
                required
                placeholder="Criar uma senha de no minimo 8 caracteres"
              />
              {flags.password ? (
                <FaRegEyeSlash onClick={password} className="password" />
              ) : (
                <FaRegEye onClick={password} className="password" />
              )}
            </label>
            <label htmlFor="confirm-password">
              <span>Confirme sua senha:</span>
              <input
                type={flags.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                value={form.confirmPassword}
                onChange={handleForm}
                required
                placeholder="Repita a senha de cima"
              />
              {flags.confirmPassword ? (
                <FaRegEyeSlash onClick={confirmPassword} className="password" />
              ) : (
                <FaRegEye onClick={confirmPassword} className="password" />
              )}
            </label>
            <h4>
              Já possui cadastro? <Link to={"/login"}>Faça login</Link>
            </h4>
            <button disabled={true}>Cadastrar</button>
          </form>
        </ContainerCadastro>
      </motion.div>
    </>
  );
};

const ContainerCadastro = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  background-color: #2c2c2c;

  & img {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }

  & form {
    width: 550px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    background-color: white;
    padding: 34px 30px;
    & h3 {
      text-align: center;
      font-size: 28px;
      font-weight: bold;
    }
    & label {
      width: 100%;
      display: flex;
      gap: 05px;
      flex-direction: column;
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

      &:disabled {
        background-color: #6e7e72;
        cursor: default;
        &:active {
          scale: none;
        }
      }
    }
  }

  @media only screen and (max-width: 480px) {
    & img {
      width: 150px;
      height: 150px;
    }
    & form {
      width: 90%;
      & h3 {
        font-size: 16px;
      }

      & label {
        & span {
          font-size: 14px;
        }
        & input {
          height: 40px;
          &::placeholder {
            font-size: 10px;
          }
        }
        & .password {
          bottom: 7px;
        }
      }
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    & form {
      width: 80%;

      & h3 {
        font-size: 18px;
      }
    }
  }
`;

export default CadastroPage;
