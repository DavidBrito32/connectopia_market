import { styled } from "styled-components";
import { images } from "./carrousel";
import { useState } from "react";
import { FaHeart, FaCartPlus } from "react-icons/fa";

const ProductDetails = () => {
  const [flags, setFlags] = useState({
    carrouselItem: 0,
  });

  const mudaSlide = (value) => setFlags({ ...flags, carrouselItem: value });

  return (
    <>
      <ContainerDetails $item={flags.carrouselItem} $slides={images.length}>
        <div className="imagens">
          <div className="image">
            {images.map((item, index) => (
              <Image key={index} src={item} />
            ))}
          </div>

          <div className="pill">
            {images.map((item, index) => (
              <Pill
                key={index}
                onClick={() => mudaSlide(index)}
                className={flags.carrouselItem === index ? "active" : ""}
              />
            ))}
          </div>
        </div>

        <div className="informacoes">
          <h2>#Product Name</h2>
          <h3>Category: Eletronic</h3>
          <h4>
            <div className="hate">
              <FaHeart />
              <FaHeart />
              <FaHeart />
              <FaHeart />
              <FaHeart />
            </div>
            90 avaliações
          </h4>

          <h3>
            R$: 350.00 <span>R$: 410.00</span>
          </h3>
          <h4>
            Estoque: <span>3 unidades disponiveis</span>
          </h4>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
            provident distinctio odio ut possimus exercitationem omnis, earum
            sapiente nemo, itaque libero voluptatem tenetur aperiam deleniti
            accusamus atque magni ipsam perspiciatis? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Nisi iure, numquam molestiae esse
            necessitatibus ipsam. Quia nisi inventore distinctio sit fuga
            repellendus accusantium animi, ducimus, quidem ipsum ab, harum
            nihil?
          </p>
          <div className="qtd">
            <h3>Quantidade:</h3>
            <span>-</span>
            <h3>1</h3>
            <span>+</span>
          </div>
          <div className="btn">
            <button className="comprar">Comprar</button>
            <button className="addCart">
              {" "}
              <FaCartPlus /> Adicionar ao carrinho
            </button>
          </div>
        </div>
      </ContainerDetails>
    </>
  );
};

const ContainerDetails = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;

  & .imagens {
    width: 40%;
    height: 80%;
    border: 2px solid white;
    display: flex;
    position: relative;
    overflow: hidden;
    & .image {
      width: calc(100% * ${(props) => props.$slides || 1});
      height: 100%;
      position: relative;
      left: calc(-100% * ${(props) => props.$item || 0});
      display: flex;
    }

    & .pill {
      width: 100%;
      height: 30px;
      background-color: #ffffff05;
      bottom: 10px;
      display: flex;
      justify-content: center;
      gap: 5px;
      align-items: center;
      position: absolute;
    }
  }

  & .informacoes {
    width: 40%;
    height: 80%;
    display: flex;
    color: white;
    gap: 10px;
    flex-direction: column;
    & h2 {
      color: white;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      font-size: 36px;
    }
    & h3 {
      display: flex;
      flex-direction: column-reverse;

      & span {
        font-size: 14px;
        text-decoration: line-through;
        color: gray;
        font-style: italic;
      }
    }
    & h4 {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 18px;
    }
    & p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-align: justify;
    }
    & .qtd {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px 0;

      & span {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: 2px solid #74ff74;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: bolder;
        cursor: pointer;
        transition-duration: 250ms;
        &:hover {
          background-color: white;
          color: black;
        }
      }
    }

    & .btn {
      margin-top: 20px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      & button {
        padding: 10px 30px;
        font-size: 16px;
        font-weight: bold;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        display: flex;
        gap: 10px;
        align-items: center;
        transition-duration: 100ms;

        &.comprar {
          background-color: #077e07;
          color: white;
        }

        &:active {
          scale: 0.97;
        }
      }
    }
  }


  @media only screen and (max-width: 480px) {
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 50px 30px;
    height: fit-content;
    gap: 30px;

    & .imagens{
        width: 100%;
        height: 400px;
    }

    & .informacoes{
        width: 100%;
        height: fit-content;

            & .btn{
                flex-wrap: wrap;
                gap: 20px;
                & button{
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 12px;
                }
            }
    }
  }

  @media only screen and (min-width: 481px) and (max-width: 768px){
    padding: 0;
    flex-wrap: nowrap;
    height: fit-content;
    padding: 50px 0;
    & .imagens{
        width: 50%;
        height: auto;
    }
    & .informacoes{
        width: 40%;
        height: auto;
            & .btn{
                & button{
                    font-size: 12px;
                }
            }
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Pill = styled.span`
  width: 40px;
  height: 13px;
  border-radius: 8px;
  cursor: pointer;
  background-color: white;
  transition-duration: 400ms;

  &.active {
    background-color: #00ff26;
  }
`;

export default ProductDetails;
