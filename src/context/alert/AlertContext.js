import { createContext, useReducer } from 'react'
import alertReducer from './AlertReducer'

const AlertContext = createContext()

export const AlertProvider = ({children}) => {
  
  const initialState = null

  const [state,dispatch] = useReducer(alertReducer,initialState)

  //set alert içine alertte gösterilecek mesaj ve alert'in tipi eklenecek
  //ayrıca dispatch'e SET_ALERT parametresi gönderileceği için alert oluşturulacak
  const setAlert = (msg,type)=>{
    dispatch({
      type:'SET_ALERT',
      payload: {msg,type} //state değerine msg ve type aktarılacak
    })
    setTimeout(()=> dispatch({type:'REMOVE_ALERT'}),3000) //state içindeki değer silinecek
  }
  return <AlertContext.Provider value={{ alert:state, setAlert }}>
    {children}
  </AlertContext.Provider>

}

export default AlertContext