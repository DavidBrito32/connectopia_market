/* eslint-disable no-unused-vars */
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import { FaPencilAlt, FaPlusCircle  } from "react-icons/fa";
import { MdFlipCameraAndroid } from "react-icons/md";


const CardEndereco = (props) => {
    return (
        <>
            <ContainerEndereco>
                <div className="dados">
                    <h3>Casa</h3>
                    <h4>Avenida</h4>
                    <h4>Numero - Complemento</h4>
                    <h4>CEP - Cidade</h4>
                </div>
                <div className="cad">
                <Link> <FaPlusCircle className='icons' /> Cadastrar novo endereço</Link>
                <Link> <FaPencilAlt className='icons' /> Editar endereço atual</Link>
                <Link> <MdFlipCameraAndroid className='icons' /> Selecionar outro</Link>

                </div>
            </ContainerEndereco>
        </>
    );
};

const ContainerEndereco = styled.div`
    width: 100%;
    height: 150px;
    border-left: 3px solid yellow;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    background-color: #333334;

        & .dados{
            width: 30%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 10px;
            color: white;

                & h3{
                    font-size: 16px;
                }

                & h4{
                    font-size: 12px;
                }
        }

        & .cad{
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 15px;
            height: 100%;
            & a{
                font-size: 12px;
                font-weight: bolder;
                margin-left: 30px;
                display: flex;
                align-items: center;
                gap: 8px;
                color: white;
                transition-duration: 150ms;
                    &:hover{
                        color: #a4a4a4;
                    }

                    & .icons{
                        width: 20px;
                        height: 20px;
                    }
            }
        }

`;

export default CardEndereco;