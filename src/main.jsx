import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Usestate.jsx'
import Mycontext from './Mycontext.jsx'


let my={
  name:"Lakki",
  age:21,
  city:"Betul"
}



let theme={
  dark:{
    "background-color":"black",
    "color":"white"
  },
  light:{
    "background-color":"white",
    "color":"black"
  }
}





createRoot(document.getElementById('root')).render(

  <Mycontext.Provider value={{theme,my}}>
  <StrictMode>
    <App />
  </StrictMode>
  </Mycontext.Provider>
)
