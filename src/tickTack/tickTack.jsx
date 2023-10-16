import { useState } from 'react';
import { createPortal } from 'react-dom';
import './tickTack.css';

const TickTack = () => {
    const [box, setBox] = useState([[false, false, false], [false, false, false], [false, false, false]]);
    const [value, setValue] = useState("⭕");
    const [message, setMessage] = useState("");
    const [firstUserName, setFirstUserName] = useState("");
    const [secondUserName, setSecondUserName] = useState("");
    const [playerOneCount, setPlayerOneCount] = useState(0);
    const [playerTwoCount, setPlayerTwoCount] = useState(0);


    const [modal, setModal] = useState(true)

    const handelOnClick = (i, j) => {
        if (box[i][j] === false) {
            box[i][j] = value;
            checkWinner(i,j,value);
            const currentValue = value === "⭕" ? "✖️" : "⭕"
            setValue(currentValue);
        }
    };

    const checkWinner = (i, j, value) => {
        let count1 = 0, count2 = 0, count3 = 0, count4 = 0;
        let val = 2;
        for (let k = 0; k < box.length; k++){
            if(box[i][k] === value){
                count1++
            }
            if(box[k][j]=== value){
                count2++
            }
            if(box[k][k]=== value){
                count3++
            }
            if(box[k][val]=== value){
                count4++
            }
            val--  
        }
        if( count1==3 || count2 == 3 || count3 == 3 || count4 == 3){
            setMessage(value+ "Wins");
            if(value ==="⭕"){
                let count = playerOneCount;
                setPlayerOneCount(count++)
            }
            if(value ==="✖️"){
                let count = playerTwoCount;
                setPlayerTwoCount(count++)
            }
        }
        if((box.flat()).every((elem)=> elem !== false) && (count1 !==3 && count2 !== 3 && count3 !== 3 && count4 !== 3)){
            setMessage("Draw");
        }

    };



        return (
            <div className='container-div'>
            { modal && 
            createPortal(
                <div className='modal-container'>
                    <div className='box-appear'>
                        <div className='player one'>
                            <label className='label-name'>Player 1</label>
                            <input value={firstUserName} onChange={(e)=> setFirstUserName(e.target.value)}/>
                        </div>
                        <div className='player two'>
                            <label className='label-name'>Player 2</label>
                            <input value={secondUserName} onChange={(e)=> setSecondUserName(e.target.value)}/>
                        </div>

                       <div className='player button'>
                       <button className='start-button' onClick={()=>setModal(false)}>Start</button>
                       </div>
                    </div>
                </div>,
                document.body
            )}

            <div className="score-board">
            <div className='player-name-one'>
            {firstUserName} "⭕"  : 
            </div>
            <div className='player-name-two'>
            : "✖️"{secondUserName} 
            </div>
            </div>

            {/* game code */}
                <div className='game-box'>
                    {
                        box.map((arr, i) => {
                            return (
                                arr.map((elem, j) => {
                                    return (
                                        <div className='box' onClick={() => handelOnClick(i, j)}>{elem}</div>
                                    )
                                })
                            )
                        })
                    }
                </div>
                { message !== "" ?  <form className='form-box'>
                    <div className='form-div'>
                        <h1 className='message-tag'>{message}</h1>
                        <button className='play-button'>Play Again</button>
                    </div>
                </form> :
                ""

                }
               
            </div>
        )
    }

    export default TickTack;





