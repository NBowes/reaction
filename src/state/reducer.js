import { NEW_MESSAGE, SET_USERNAME, REACTION_OBJECTS } from './types'

export const initialState = { 
  messages: [], 
  username: "anonymous",
  reactionsMap: {}
}

const REACTION_TYPES = REACTION_OBJECTS.map(reactionObject => reactionObject.type)

const reducer = (state, action) => {
  if(REACTION_TYPES.includes(action.type)){
    let reactionsMap;

    const { messageId } = action.item

    const messageReactions = state.reactionsMap[messageId] || []

    reactionsMap = {
      ...state.reactionMap,
      [messageId]: [...messageReactions, action.item]
    }
    return { ...state, reactionsMap}
  }

  switch(action.type) {
    case NEW_MESSAGE:
      return {...state, messages:[...state.messages, action.item]}
    case SET_USERNAME:
      return { ...state, username: action.username}
    default: 
      return state
  }
}

export default reducer;
