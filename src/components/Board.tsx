import Piece from './Piece';
import {Position, PieceInterface} from "./Chess";
import {findMoveInMoves} from "../helpers/getMoves";

interface BProps {
    boardPieces: PieceInterface[][],
    selectPiece: (x: number, y: number) => void,
    moves: Position[] | null,
}

function Board ({boardPieces, selectPiece, moves} : BProps) {
    return (
        <div className={"container mx-auto mt-32 flex justify-center"}>
            <div className={"flex flex-col items-center justify-center border-gray-400 border-2 w-max"}>
                {boardPieces.map((row, rowIdx)=> {
                    return (
                        <div key={rowIdx} className={"row flex"}>
                            {row.map((piece, pieceIdx) => {
                                let isMove = false;
                                if (moves?.length)
                                    isMove = findMoveInMoves([pieceIdx, rowIdx], moves);
                                return (
                                    <div className={
                                        `w-14 h-14 text-center select-none border-gray-400 border-2 ${piece.selected ? "bg-gray-600" : ""} ${isMove ? "bg-gray-500" : ""}`
                                    } key={pieceIdx} onClick={() => selectPiece(pieceIdx, rowIdx)}>
                                        <Piece key={pieceIdx} team={piece.team} typ={piece.typ} />
                                    </div>
                                );
                            })}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Board;