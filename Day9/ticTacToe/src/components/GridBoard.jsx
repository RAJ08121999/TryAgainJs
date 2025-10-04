import React, { useEffect, useState } from 'react'

const GridBoard = () => {

    const [ board , setBoard ] = useState(Array(9).fill(null));
    const [ currentUser , setCurrentUser ] = useState("X");
    const [ winner , setWinner ] = useState(null);
    const [ winnerCombo , setWinnerCombo ] = useState([]);

    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],//row wise
        [0,3,6],[1,4,7],[2,5,8],//col wise
        [2,4,6],[0,4,8]//diagonals
    ]

    function makeAMove(index){
        if(isClickAllowed(index)){
            move(index);// if clicking is allowed then make a move
            updateUser()

        }
    }
    
    function updateUser(){        
        setCurrentUser(currentUser==='X'?'O':'X');// after clicking update the current user 
    }

    function isClickAllowed(index){
        if(board[index]===null && winner === null)
            return true;
    }

    function move(index){
        const newBoardArr = [...board];
        newBoardArr[index] = currentUser;
        setBoard(newBoardArr);
        console.log("let's see the updated array",newBoardArr);
        findWinner(newBoardArr);//check if winnerfound
        
    }

    useEffect(()=>{
        if(winner){
            console.log(`Winner found:${winner}`);
            console.log(`Winner combo is : ${winnerCombo}`);
        }
    },[winner,winnerCombo]);

    
    function findWinner(newBoardArr){
        for (let combo of winningCombos){
            const [index1,index2,index3] = combo;
            if(newBoardArr[index1] && newBoardArr[index1]===newBoardArr[index2] && newBoardArr[index1]===newBoardArr[index3]){
                setWinner(newBoardArr[index1]);
                setWinnerCombo(combo);
                return;
            }
        }
    }

    function isDraw(Board){
        const allIndexFilled = Board.every((index)=>index!==null);
        if(allIndexFilled && winner===null)
        {
            console.log("its a draw")
            return true;
        }
    }

    function resetFunction(){
        setBoard(Array(9).fill(null));
        setCurrentUser("X");
        setWinner(null);
        setWinnerCombo([]);
    }

    return (
        <div className='bg-slate-800 h-screen flex flex-col justify-center items-center'>
            <div className='grid grid-cols-3'>
                {
                    board.map((cell,index)=>(
                        <div
                            key={index}
                            onClick={() => makeAMove(index)}
                            className={`h-[100px] w-[100px] border-2 flex justify-center items-center text-4xl text-amber-600 cursor-pointer 
                            ${winner && winnerCombo.includes(index) ? " border-3 border-green-500" : "border-gray-200"}
                            `}
                        >
                            {cell}
                        </div>
                    ))
                }
            </div>

            <div className='flex flex-col justify-center items-center'>

                <h4 className='text-2xl text-amber-600 mt-4'>
                    {winner||isDraw(board) ? "" : (currentUser==="X"?"X":"O")}
                </h4>

                <h4 className='text-2xl text-amber-600 mt-4 text-center'>
                    { winner ? `Winner is ${winner}`: isDraw(board) ? `Its a Draw`: "Play"}
                </h4>


                <button
                onClick={resetFunction}
                className='px-5 py-1 bg-red-600 mt-4 rounded-md text-2xl text-white text-center'>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default GridBoard;
