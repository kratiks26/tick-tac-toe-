import{useContext} from "react";
import { Context } from "../Practice";

export const Comp3 =()=>{

    const name= useContext(Context);

    console.log("c")
    return(

        <div> {`hello ${name}`} </div>
    )
}