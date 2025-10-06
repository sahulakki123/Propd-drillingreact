import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Ccontext.jsx'
import Mycontext from './Mycontext.jsx'


let my={
  name:"Lakki",
  age:21,
  city:"Betul"
}

createRoot(document.getElementById('root')).render(

  <Mycontext.Provider value={my}>
  <StrictMode>
    <App />
  </StrictMode>,
  </Mycontext.Provider>
)
