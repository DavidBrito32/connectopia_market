import styled from "styled-components";
import Slide from "./slide";
import { useState } from "react";
import { Banners } from "./banners";
const Carrousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [itemAtivo, setItemAtivo] = useState(0);
  const pagination = (slide) => setActiveSlide(slide);

  return (
    <div>
      <CarrouselContainer $slide={activeSlide} $paginator={itemAtivo}>
        <div className="items">
          {Banners.map((item) => (
            <Slide key={item.id} dados={item} />
          ))}
        </div>
        <div className="pagination">
          {Banners.map((item, i) => (
            <span
              key={i}
              className={itemAtivo === i ? "active" : ""}
              onClick={() => {
                pagination(i);
                setItemAtivo(i);
              }}
            />
          ))}
        </div>
      </CarrouselContainer>
    </div>
  );
};

const CarrouselContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;

  & .items {
    width: calc(100vw * ${(props) => props.$items || 1});
    left: calc(-100vw * ${(props) => props.$slide || 0});
    display: flex;
    position: relative;
    height: 80vh;
    transition: all ease-in-out 300ms;
  }

  & .pagination {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    & span {
      width: 20px;
      height: 20px;
      background-color: #fdfdfd;
      border-radius: 50%;
      cursor: pointer;
      transition-duration: 300ms;

      &.active {
        background-color: #00fe07;
      }

      &:active {
        scale: 0.9;
        background-color: yellow;
      }
      &:hover {
        scale: 1.1;
      }
    }
  }

  @media only screen and (max-width: 480px) {
    align-items: initial;
    height: 110vh;
  }
`;

export default Carrousel;
