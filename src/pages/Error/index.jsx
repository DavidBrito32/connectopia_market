import { Link } from "react-router-dom";
import { styled } from "styled-components";
import erro from "./assets/404.svg";

const ErrorPage = () => {
  return (
    <ContainerError>
      <div className="texto">
        <h1>Error 404</h1>
        <h3>Desculpe, a pagina solicitada não esta disponivel no momento</h3>
        <p>Neste ambiente não podemos garantir sua segurança por tanto recomendamos que você retorne a pagina principal de nosso site</p>
        <Link to={"/"}>Voltar a segurança</Link>
      </div>

      <img src={erro} alt="error" />
    </ContainerError>
  );
};

const ContainerError = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 50px;

    & .texto{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 30px;

            & h1{
                font-size: 48px;
                color: white;
            }

            & h3{
                font-size: 28px;
                color: green;
            }

            & p{
                color: white;
                font-size: 18px;
            }

            & a{
                width: fit-content;
                color: #00FF66;
                padding: 20px;
                background-color: black;
                border-radius: 8px;

            }
    }

    & img{
        flex: 1;
        width: 100%;
        height: 50%;
    }
`;

export default ErrorPage;
