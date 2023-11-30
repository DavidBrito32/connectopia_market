/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { styled } from "styled-components";
import airpods from "./assets/qirpods.png";

const Slide = ({ dados }) => {
  return (
    <>
      <ContainerSlide $btnColor={dados.btnColor} $TextBtn={dados.colorTextBtn}>
        <div className="breefing">
          <h3>{`${
            (dados && dados.supTitle) || "Procurando audio de qualidade?"
          }`}</h3>
          <h1>{`${(dados && dados.Title) || "Seleção exclusiva de audio"}`}</h1>
          <p>
            {(dados && dados.desc) ||
              "Lorem Ipsum is simply dummy text of the printing and typesetting      industry. Lorem Ipsum has been the standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not onlyfive centuries, but also the leap into electronic typesetting,       remaining essentially unchanged. It was popularised in the 1960s                with the release of Letraset sheets containing Lorem Ipsum passages,                and more recently with desktop publishing software like Aldus        PageMaker including versions of Lorem Ipsum."}
          </p>

          <button>{`${(dados && dados.btnCompra) || "Ver Ofertas"}`}</button>
        </div>

        <img src={dados && dados.image} alt={dados && dados.title} />
      </ContainerSlide>
    </>
  );
};

const ContainerSlide = styled.div`
  min-width: 100vw;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 50px;

  & .breefing {
    width: 45%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    & h3 {
      color: #e9e11c;
      font-size: 22px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 32px;
    }

    & h1 {
      color: #fff;
      font-size: 48px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      margin-bottom: 32px;
    }

    & p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #fff;
      text-align: justify;
      font-size: 22px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      margin-bottom: 80px;
    }

    & button {
      width: 300px;
      height: 70px;
      color: #000;
      font-size: 28px;
      font-style: normal;
      font-weight: 800;
      line-height: normal;
      border: none;
      border-radius: 8px;
      transition-duration: 100ms;
      cursor: pointer;
      background-color: ${(props) => props.$btnColor || "#00FF66"};
      color: ${(props) => props.$TextBtn || "#FDFDFD"};

      &:hover {
        opacity: 0.8;
        scale: 1.03;
      }
      &:active {
        scale: 0.99;
      }
    }
  }

  & img {
    flex: 1;
    display: block;
    height: 100%;
    object-fit: contain;
  }

  @media only screen and (max-width: 480px) {
    flex-direction: column-reverse;
    padding: 0 10px;
    gap: 20px 0;

    & img {
      width: 100%;
    }

    & .breefing {
      width: 100%;

      & h3 {
        font-size: 14px;
        margin-bottom: 10px;
      }

      & h1 {
        font-size: 32px;
        text-align: center;
        margin-bottom: 10px;
      }

      & p {
        display: none;
      }

      & button {
        width: 100%;
      }
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px) {
    padding: 0 10px;
    & .breefing {
      width: 50%;

      & h3 {
        font-size: 18px;
      }

      & h1 {
        font-size: 24px;
      }

      & p {
        font-size: 14px;
      }

      & button {
        width: 150px;
        height: 40px;
        font-size: 14px;
      }
    }

    & img {
      flex: none;
      width: 50%;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) {
    padding: 0 10px;
    & .breefing {
      width: 50%;

      & h3 {
        font-size: 18px;
      }

      & h1 {
        font-size: 24px;
      }

      & p {
        font-size: 14px;
      }

      & button {
        width: 150px;
        height: 40px;
        font-size: 14px;
      }
    }

    & img {
      flex: none;
      width: 50%;
    }
  }
`;

export default Slide;
