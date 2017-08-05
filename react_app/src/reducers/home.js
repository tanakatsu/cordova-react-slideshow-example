const home = (state = {root: '/'}, action) => {
  switch (action.type) {
    case 'SET_ROOT':
      return {root: action.path}
    default:
      return state
  }
}

export default home
