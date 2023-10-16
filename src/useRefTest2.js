import { useRef, useEffect,useState } from "react";

function UseRefTest2() {
    const [ input, setinput]= useState("");
    const refColor = useRef(null);

   

    const colorChange = () => {
        setInterval(() => {
            if (refColor.current.style.backgroundColor === "red") {
                refColor.current.style.backgroundColor = "green";
            }
            else if (refColor.current.style.backgroundColor === "green") {
                refColor.current.style.backgroundColor = "blue";
            }
            else {
                refColor.current.style.backgroundColor = "red";
            }
        }, 1000);
    };

    useEffect(()=>{
        colorChange()
    },[])

    return (
        <div >
            <input ref={refColor} style={{ backgroundColor: "red" }}/>
            <br/>
            <input value={input} onChange={(e)=> setinput(e.target.value)} />
        </div>
    )
};

export default UseRefTest2;