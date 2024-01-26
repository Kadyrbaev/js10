import { createStore } from "redux";

const initialState = {
    todos: [{name: "Darhan", age: 20}]
}

const todoReducer = (state = initialState, action)=>{
    console.log(777);
    if(action.type === "NUM"){
        return  {
            todos: [{name: "Beknazar", age: 20}]
        }

    }
    return state

}

export const store = createStore(todoReducer)


// const res = store.subcribe()
// log