import Piece from './Piece';
import {Position, PieceInterface} from "./Chess";
import {findMoveInMoves} from "../helpers/getMoves";

interface BProps {
    boardPieces: PieceInterface[][],
    handleClick: (x: number, y: number) => void,
    moves: Position[],
}

function Board ({boardPieces, handleClick, moves} : BProps) {
    return (
        <div className={"flex flex-col items-center justify-center border-gray-400 border-2"}>
            {boardPieces.map((row, rowIdx)=> {
                return (
                    <div key={rowIdx} className={"row flex"}>
                        {row.map((piece, pieceIdx) => {
                            let isMove = findMoveInMoves([pieceIdx, rowIdx], moves);
                            return (
                                <div className={
                                    `w-max aspect-square py-1 select-none border-gray-400 border-2 ${piece.selected ? "bg-gray-600" : ""} ${isMove ? "bg-gray-500" : ""}`
                                } key={pieceIdx} onClick={() => handleClick(pieceIdx, rowIdx)}>
                                    <Piece key={pieceIdx} team={piece.team} typ={piece.typ} size={"text-5xl"}/>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}

export default Board;