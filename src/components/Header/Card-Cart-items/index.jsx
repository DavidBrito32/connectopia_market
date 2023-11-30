import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

const CardCart = () => {
  return (
    <>
      <CardContainer>
        <img
          src="https://http2.mlstatic.com/D_NQ_NP_2X_995606-MLA45807666328_052021-F.webp"
          alt=""
        />

        <div className="infos">
          <h2>{`Air Pods Max Apple`}</h2>
          <p>{`Um Fone Revolucionario`}</p>
          <div className="actions">
            <div className="botoes">
              <span> - </span>
              <p>{`1`}</p>
              <span> + </span>
            </div>

            <FaTrashAlt className="trash" />
          </div>

          <h3>{`R$: 1.750,00`}</h3>
        </div>
      </CardContainer>
    </>
  );
};

const CardContainer = styled.li`
  width: 100%;
  height: 100px;
  display: flex;
  background-color: black;
  justify-content: space-around;
  align-items: center;
  padding: 3px 0 7px;
  & img {
    display: block;
    width: 90px;
    height: 90%;
    object-fit: contain;
  }

  & .infos {
    display: flex;
    flex-direction: column;
    color: white;
    width: 125px;
    align-items: center;

    & h2 {
      width: 140px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-weight: bolder;
      color: white;
    }

    & p {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 11px;
    }

    & h3 {
      width: 120px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 14px;
      font-weight: bolder;
      color: white;
    }

    & .actions {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      /* padding: 0 5px; */
      margin: 10px 0;
      & .botoes {
        display: flex;
        gap: 8px;
        justify-content: space-between;
        & p {
          font-size: 14px;
        }
        & span {
          width: 20px;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 14px;
          height: 20px;
          background-color: #3c3c3c;
          border-radius: 50%;
          color: white;
          padding-bottom: 0.1rem;
          cursor: pointer;

          &:active {
            scale: 0.97;
          }
          &:hover {
            background-color: rgba(54, 74, 65, 0.96);
          }
        }
      }
      & .trash {
        width: 25px;
        height: 25px;
        cursor: pointer;
        transition-duration: 200ms;
        &:hover {
          scale: 1.1;
          color: red;
        }
        &:active {
          scale: 0.97;
        }
      }
    }
  }
`;

export default CardCart;
