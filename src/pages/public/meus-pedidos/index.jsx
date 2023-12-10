import { styled } from "styled-components";
import ProductsInCart from "./products-incart";
import CardEndereco from './cardEndereco/index';
import { useNavigate } from 'react-router-dom';
import { motion } from "framer-motion"
const MeusPedidos = () => {
  const navigate = useNavigate();
  return (
    <>
    <motion.div
    initial={{opacity: 0}}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    >
      <ContainerPedidos>
        <ul>
          <h3>Produtos no carrinho:</h3>
          <ProductsInCart />
        </ul>
        <div className="comprar">

            <div className="endereco">
                <CardEndereco />
            </div>

            <h1>Resumo</h1>
            <h3>Valor dos produtos <span>R$: 3.500,00</span></h3>
            <h3>Frete: <span>R$: 0,00</span></h3>
            <h3>Total a prazo: <span>R$: 3.850,00</span></h3>
            <h3 className="discount">(em ate 10x de 473,68 sem juros)</h3>
            <button>Prosseguir para o pagamento</button>
            <button onClick={() => navigate("/products")}>Continuar comprando</button>
        </div>
      </ContainerPedidos>
      </motion.div>
    </>
  );
};
const ContainerPedidos = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 30px 50px 0;

  & ul {
    width: 40%;
    height: 500px;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
    background-color: #6b6b6b;
    padding: 10px 20px 0;
    gap: 10px;
    border-radius: 8px;

    & h3 {
      width: 100%;
      text-align: left;
      font-size: 32px;
      color: white;
    }
  }

  & .comprar{
    width: 30%;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;

        & h1{
            color: white;
        }
        & h3{
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 18px;
            color: white;
              &.discount{
                color: #fb3030;
              }
        }

        & button{
            width: 100%;
            height: 55px;
            font-size: 22px;
            font-weight: bolder;
            cursor: pointer;
            color: white;
            background-color: #305416;
            border: none;
            transition-duration: 150ms;
                &:hover{
                    background-color: #42761e;
                }

                &:active{
                    scale: .97;
                }
        }
  }


  @media only screen and (max-width: 768px){
    flex-direction: column;
    padding: 50px 10px;
    flex-wrap: nowrap;
    height: fit-content;
    gap: 40px;

      & ul{
        width: 100%;
      }

      & .comprar{
        width: 100%;
      }
  }
`;

export default MeusPedidos;
