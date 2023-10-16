import {createContext} from "react";
import { Comp1 } from "./component/comp1";

export const Context = createContext("")

const Practice = () => {
    const name = "Kratik"
    return (
        <Context.Provider value={name} >
            <div>
                main div
                <Comp1 />
            </div>
        </Context.Provider>
            


    )
};

export default Practice; 