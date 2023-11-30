import { styled } from "styled-components";
import Banner from "./assets/banner rodape.svg";
const BannerRodape = () => {
  return (
    <>
      <ContainerBanner>
        <div className="imagem">
          <img src={Banner} alt="" />
        </div>
        <div className="slogan">
          <h3>PC GAMER</h3>
          <h1>Montamos seu pc gamer</h1>
          <p>
            Escolha os componentes, selecione os perifericos e nos montamos para
            voce!
          </p>

          <button>Faça seu orçamento aqui</button>
        </div>
      </ContainerBanner>
    </>
  );
};

const ContainerBanner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;

  & .imagem {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      display: block;
      width: 100%;
      height: 80%;
      object-fit: contain;
    }
  }

  & .slogan {
    width: 30%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    & h3 {
      font-size: 38px;
      border-radius: 8px;
      padding: 8px 80px;
      border: 2px solid #e5ea0f;
      text-align: center;
      color: white;
    }

    & h1 {
      width: 80%;
      margin-top: 25px;
      font-size: 48px;
      font-weight: bolder;
      color: white;
    }

    & p {
      color: #fff;
      font-family: Inter;
      font-size: 28px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }

    & button {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      color: white;
      font-weight: bold;
      background-color: #00ff66;
      margin-top: 103px;
      font-size: 22px;
      cursor: pointer;
      border: none;
      transition: all 0.3s;
      &:hover {
        background-color: #00ff77;
        color: red;
      }
      &:active {
        scale: 0.97;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    height: fit-content;
    margin-top: 50px;
    padding: relative;
    gap: 30px;

    & .slogan {
      width: 100%;

      & h3 {
        font-size: 22px;
      }

      & h1 {
        font-size: 32px;
      }

      & p {
        font-size: 16px;
      }
    }

    & .imagem {
      width: 100%;
      height: 60vh;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    justify-content: space-around;
    & .imagem {
      width: 40%;
    }

    & .slogan {
      width: 40%;
      & h3 {
        font-size: 22px;
      }

      & h1 {
        font-size: 32px;
      }

      & p {
        font-size: 20px;
      }
    }
  }
`;

export default BannerRodape;
