import { styled } from "styled-components";
import Logo from "./assets/logo.svg";
import { FaInstagram } from "react-icons/fa";
import { SiGooglemaps } from "react-icons/si";

import { SlSocialFacebook } from "react-icons/sl";

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <div className="social_media">
          <span>
            <FaInstagram className="icon" /> @connectopia_market
          </span>
          <span>
            <SlSocialFacebook className="icon" /> @connectopia_market
          </span>
        </div>
        <div className="logomarca">
          <img src={Logo} alt="Logomarca" />
        </div>
        <div className="endereco">
          <SiGooglemaps className="icon" />
          <h3>Av. Caminho do Sol, 3973/casa, Porto das Dunas, Aquiraz-Ce</h3>
        </div>
        <div className="hr"></div>
        <p>&#174; Todos os Direitos Reservados</p>
      </ContainerFooter>
    </>
  );
};

const ContainerFooter = styled.footer`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0 40px;
  justify-content: space-between;
  align-items: center;
  background-color: black;
  color: white;

  & .social_media {
    padding: 50px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    & .icon {
      width: 30px;
      height: 30px;
    }

    & span {
      display: flex;
      gap: 5px;
      font-size: 1.3rem;
      align-items: center;
    }
  }

  & .logomarca {
    width: 167px;
    height: 167px;
    & img {
      width: 100%;
      height: 100%;
    }
  }

  & .endereco {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 30px;

    & .icon {
      width: 70px;
      height: 70px;
    }
  }

  & .hr {
    width: 100%;
    height: 3px;
    background-color: white;
  }

  & p {
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: 14px;
    font-weight: 800;
    margin: 30px 0;
  }

  @media only screen and (max-width: 480px) {
    padding: 0;
    justify-content: center;
    & .social_media {
      width: 100%;
      justify-content: center;
      align-items: center;
      & span {
        font-size: 1rem;
        & .icon {
          width: 20px;
          height: 20px;
        }
      }
    }
  }
`;

export default Footer;
