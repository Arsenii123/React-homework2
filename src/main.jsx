import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Name from "../../homeworkfromreact2.1/src/components/name.jsx";
import Ingridient from "../../homeworkfromreact2.1/src/components/ingirdients.jsx";
import Cook from "../../homeworkfromreact2.1/src/components/cooking.jsx";
import Advice from "../../homeworkfromreact2.1/src/components/advices.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <Name />
      <Ingridient />
      <Cook />
      <Advice />
  </StrictMode>,
)
