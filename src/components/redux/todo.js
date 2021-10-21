import {
    createStore
} from "redux"
//actions
// return objects of value(payload) of type addtodo  
const ADD_TODO = "ADD_TODO"
const DELETE_TODO = "DELETE_TODO"
export const addTodoAction = (payload) => {
    return {
        type: ADD_TODO,
        payload
    }

}
export const deleteTodoAction = (payload) => {
    return {
        type: DELETE_TODO,
        payload
    }

}
//state
const initialState = {
    todos: [

    ]
}
//reducer that take old state and action
const todoReducer = (state = initialState, action) => {
    //check action
    switch (action.type) {
        case ADD_TODO:
            //take copy from state and put action(todo) in it  
            return {
                ...state, todos: [...state.todos, action.payload]
            }
            case DELETE_TODO:
                return {
                    ...state,
                    todos: [...state.todos.filter((todo, i) => i !== action.payload)],
                }
                default:
                    return state
    }
}
//store put inside it my redux
export const store = createStore(todoReducer);