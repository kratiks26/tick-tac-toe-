 import { useEffect, useRef } from "react";


 function UseRefTest1(){

    const ref = useRef();
    useEffect(()=>{
        ref.current.focus()
    },[])
    return(
        <div>
            <p>lorem lorem lorem lorem lorem lorem lorem lorem</p>
            <img src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.webp?b=1&s=170667a&w=0&k=20&c=-UWLqQI8oIx2-sOdWemeJ4Hy1hGZi1UPy-qcivJXgyM="/>
            <br/>
            <input ref={ref}/>

        </div>

    );
 };

 export default UseRefTest1;