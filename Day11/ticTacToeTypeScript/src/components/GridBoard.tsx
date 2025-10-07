import{ useState } from 'react'

const GridBoard = () => {
    const [board,setBoard] = useState<(string|null)[]>(Array(9).fill(null));
    const [currentPlayer , setCurrentPlayer ] = useState<string>('X');
    const [winner, SetWinner] = useState<string|null>(null);
    const [winningCombo , setWinningCombo ] = useState<number[]>([]);

    const winningCombos = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]


    function makeAMove(index:number){
        if(isClickAllowed(index)){
            move(index);
            upDatePlayer();
        }
        
    }
    
    function isClickAllowed(index:number):boolean{
        return board[index]===null && winner===null
    }

    function move(index:number){
        const newBoardArr = [...board];
        newBoardArr[index]=currentPlayer;
        setBoard(newBoardArr);
        findWinner(newBoardArr);
    }

    function findWinner(boardArray:(string|null)[]):void{
        for(const combo of winningCombos){
            const [index0,index1,index2] = combo;
            if(boardArray[index0]!==null &&
                boardArray [index0] === boardArray[index1] && boardArray[index0] === boardArray[index2]
                )
            {
                SetWinner(boardArray[index0]);
                setWinningCombo(combo);
            }
                
        }
    }

    function upDatePlayer(){
        setCurrentPlayer(prev => prev==='X'?'O':'X');
    }

    function isDraw(Board:(string|null)[]):boolean{

        const allCellFilled = Board.every((index)=>index!==null);

        return allCellFilled && winner===null;
    }

    function resetGame(){
        setBoard(Array(9).fill(null));
        setCurrentPlayer('X');
        SetWinner(null);
        setWinningCombo([]);
    }

  return (
    <div className=' h-screen w-full flex flex-col justify-center items-center bg-slate-900'>
        <h1 className='text-4xl text-amber-600 mb-4'>Tic Tac Toe Game</h1>
        <div className='grid grid-cols-3'>
            {
                board.map((cell,index)=>(
                    <div
                    className={
                        `h-[100px] w-[100px] border-2 border-amber-600 flex justify-center items-center text-2xl text-amber-600 cursor-pointer
                        ${winner && winningCombo.includes(index) ? `border-2 border-green-600`: `` }
                        `
                    }
                    
                    key={index}
                    onClick={()=>makeAMove(index)}
                    >{cell}</div>
                ))
            }
        </div>

        <div className='text-2xl text-amber-600 text-center mt-4 space-y-2'>
            <h2>{ winner|| isDraw(board) ? " " : currentPlayer === 'X'?'X':'O'}</h2>
            <h2>{winner?`Winner is ${winner}`:isDraw(board) ? `Its a Draw `: `Play`}</h2>
        </div>

        <div className='mt-4'>
            <button
            className='text-2xl text-amber-600 text-center bg-white px-3 py-1 rounded-md hover:bg-red-600 hover:text-white'
            onClick={()=>resetGame()}
            >Reset</button>
        </div>
    </div>
  )
}

export default GridBoard
