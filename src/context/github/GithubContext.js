import { createContext,useReducer } from "react"
import githubReducer from "./GithubReducer"
const GithubContext = createContext();


export const GithubProvider = ({children})=> {
  
  const initialState = {
    users: [],
    repos: [],
    user: {},
    loading: false
  }
  const [state,dispatch] = useReducer(githubReducer, initialState)

  // //Get search users result 
  // const searchUsers = async (text)=>{
  //     setLoading() //dispatch içinde sET_LOADING i çağırır ve LOADING değeri true yapılır
  //     const params = new URLSearchParams({q: text})//yeni bir parametre oluşturuyoruz. Query String
  //     const response = await fetch(`${GITHUB_URL}/search/users?${params}`,{
  //       headers:{
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       }
  //     })
  //     const {items} = await response.json() // gelen verinin içinden items verisini çekiyoruz
  //     //dispatch metoduna action parametresini gönderiyoruz.
  //     //Bu şekilde GithubRecuer metodu çalışacak
  //     dispatch({
  //       type: 'GET_USERS', //loading false yapılır ve state içine users parametresi eklenir.
  //       payload: items,
  //     })
  // }


   //Get single user by login 
  // const getUser = async (login)=>{
  //     setLoading() //dispatch içinde sET_LOADING i çağırır ve LOADING değeri true yapılır
  //     const response = await fetch(`${GITHUB_URL}/users/${login}`,{
  //       headers:{
  //         Authorization: `token ${GITHUB_TOKEN}`,
  //       }
  //     })
  //     if(response.status === 404){
  //       window.location = '/notfound'
  //     } else {
  //     const data = await response.json() // gelen verinin içinden items verisini çekiyoruz
  //     //dispatch metoduna action parametresini gönderiyoruz.
  //     //Bu şekilde GithubRecuer metodu çalışacak
  //     dispatch({
  //       type: 'GET_USER', //loading false yapılır ve state içine users parametresi eklenir.
  //       payload: data,
  //     })
  //     }
  // }

  return <GithubContext.Provider value={{ 
  ...state,
  dispatch,
  }}>
  {children}
</GithubContext.Provider>
}//GithubProvider Bitişi

export default GithubContext;

