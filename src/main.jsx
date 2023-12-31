import ReactDOM from 'react-dom/client'
import App from './App'
import { createGlobalStyle } from 'styled-components';

export const Estilo = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    outline: none;
    font-family: 'Inter', sans-serif;
  }

`;

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Estilo />
    <App />
  </>
);
