import {
    createStore
} from "redux"
//actions
 
const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
export const increment = (payload) => {
    return {
        type: INCREMENT,
        payload
    }

}
export const decrement = (payload) => {
    return {
        type: DECREMENT,
        payload
    }

}
//state
const initialState = {
   count:0
}
//reducer that take old state and action
const countReducer = (state = initialState, action) => {
    //check action
    switch (action.type) {
        case INCREMENT:
          
            return {
                ...state, count: [...state.count+action.payload]
            }
            case DECREMENT:
               
                return {
                    ...state, count: [...state.count-action.payload]
                }
                default:
                    return state
    }
}
//store put inside it my redux
export const store = createStore(countReducer);