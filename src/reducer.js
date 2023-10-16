import { useReducer } from "react";

// const fun = (state, action) =>{
//     switch(action){
//         case "increment by 1":
//             return state +=1;
//         case "increment by 100":
//             return state += 100;
//         case "multiply by 10":
//             return state *= 10;
//         case "divided by 2":
//             return state /= 2;
//         default:
//             return state;
//     }

// };


// const initialVal = 0;

const UseReducer = () => {

    const [state, dispatch] = useReducer((
        (state, action)=>{
            switch(action){
                case "increment by 1":
                    return state +=1;
                case "increment by 100":
                    return state += 100;
                case "multiply by 10":
                    return state *= 10;
                case "divided by 2":
                    return state /= 2;
                default:
                    return state;
            }
        }
    ), 0)

    return(
        <>
        <h1>{state}</h1>
        <button onClick={()=> dispatch("increment by 1")}>increment by 1</button>
        <button onClick={()=> dispatch("increment by 100")}>increment by 100</button>
        <button onClick={()=> dispatch("multiply by 10")}>multiply by 10</button>
        <button onClick={()=> dispatch("divided by 2")}>divided by 2</button>
        </>
    )
}

export default UseReducer;