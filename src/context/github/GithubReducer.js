const githubReducer = (currentState, action) => {
  switch(action.type){
    case 'GET_USERS':
      return {
        ...currentState,
        users: action.payload,
        loading:false
      }
      case 'GET_USER_AND_REPOS'://payload içinde user verisi ve ona ait repolarının verisi var
      return {
        ...currentState,
        user: action.payload.user,
        repos: action.payload.repos,
        loading:false
      }
      case 'SET_LOADING': 
      return {
        ...currentState,
        loading:true
      }
      case 'CLEAR_USERS':
        return {
          ...currentState,
          users:[],
          loading:false
        }
    default:
      return currentState;
  }
}

export default githubReducer;