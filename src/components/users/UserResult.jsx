import { useEffect, useContext } from "react"
import GithubContext from "../../context/github/GithubContext"
import Spinner from "../layout/Spinner"
import UserItem from "./UserItem"
function UserResult() {

  const {loading,users,fetchUsers} = useContext(GithubContext)
  
  useEffect(()=>{
    if(loading)
    fetchUsers()
  },[])


  if(!loading){
    return (
    <div className="grid grid-cols-1 gap-9 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {
        users.map((user)=>(
          <UserItem key={user.id} user={user}/>
        ))
      }
    </div>
  )
  }
  else {
     return <Spinner/>
  }


  
}

export default UserResult