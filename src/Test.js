// code written by Sagar

import { useReducer } from "react"
const initalState = 0
const Test = () => {

    const [state, dispatch] = useReducer(reducerFun, initalState)
    const reducerFun = (state, action) => {
        switch (action.type) {
            case "increment": ++state

                break;
            case "decrement": --state

                break;
            default: state
                break;
        }
    }
    

    // console.log(state);
    // console.log(initalState+"intail");
    return (

        <div>
            <button onClick={() => dispatch({ type: increment })}>++++</button>
            {state}
            <button onClick={() => dispatch({ type: decrement })}>----</button>

        </div>
    )
}

export default Test