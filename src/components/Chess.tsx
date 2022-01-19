import React from 'react';
import Board from '../components/Board';
import {initBoard} from "../helpers/initBoard";
import {findMoveInMoves, getPossibleMoves} from "../helpers/getMoves";
import LostPieces from "./LostPieces";

export interface PieceInterface {
    typ: PieceType,
    team: Team,
    position: Position
    selected: boolean,
}
export type Position = [number, number];
export type Team = "white" | "black" | "free";
export type PieceType = "rook" | "knight" | "bishop" | "queen" | "king" | "pawn" | "free";
interface LPInterface {
    blacks: Map<PieceType, number>,
    whites: Map<PieceType, number>
}
interface MyProps {}
interface MyState {
    board: PieceInterface[][],
    selectedPiece: Position | null,
    possibleMoves: Position[],
    turn: Team,
    lostPieces: LPInterface
}
class Chess extends React.Component<MyProps, MyState>{
    constructor(props : MyProps) {
        super(props);
        this.state = {
            board: initBoard(),
            selectedPiece: null,
            possibleMoves: [],
            turn: "white",
            lostPieces: {blacks: new Map(), whites: new Map()},
        }
    }

    handleClick = (x: number, y: number) : void => {
        let clickedPiece = this.state.board[y][x];
        if (findMoveInMoves(clickedPiece.position, this.state.possibleMoves)) {
            this.makeMove(this.state.selectedPiece!, clickedPiece.position);
            return;
        }
        if (clickedPiece.team === this.state.turn)
            this.selectPiece(clickedPiece);
    }

    makeMove(oldPos: Position, newPos: Position) {
        let newBoard = this.state.board.slice();
        let fromPiece = newBoard[oldPos[1]][oldPos[0]];
        let toPiece = newBoard[newPos[1]][newPos[0]];
        let newLost: LPInterface = this.state.lostPieces;

        if (toPiece.team === "black" && fromPiece.team === "white") {
            if (newLost.blacks.has(toPiece.typ)) {
                let oldVal = newLost.blacks.get(toPiece.typ);
                newLost.blacks.set(toPiece.typ, oldVal!+1);
            }
            else newLost.blacks.set(toPiece.typ, 1);

        }
        else if (toPiece.team === "white" && fromPiece.team === "black") {
            if (newLost.whites.has(toPiece.typ)) {
                let oldVal = newLost.whites.get(toPiece.typ);
                newLost.whites.set(toPiece.typ, oldVal!+1);
            }
            else newLost.whites.set(toPiece.typ, 1);

        }

        toPiece.typ = fromPiece.typ;
        toPiece.team = fromPiece.team;
        fromPiece.typ = "free";
        fromPiece.team = "free";
        fromPiece.selected = false;
        this.setState({
            board: newBoard,
            selectedPiece: null,
            possibleMoves: [],
            turn: this.state.turn === "white" ? "black" : "white",
            lostPieces: newLost,
        });

        // Send socket move has been made
    }

    selectPiece = (piece: PieceInterface) : void => {
        let newBoard = this.state.board.slice();
        let newSelected : Position | null = null;
        let newMoves : Position[] = [];
        if (!piece.selected) {
            piece.selected = true;
            newSelected = piece.position;
            newMoves = getPossibleMoves(piece, newBoard);
        }
        else piece.selected = false;

        if (this.state.selectedPiece) {
            let [prevX, prevY] = this.state.selectedPiece;
            newBoard[prevY][prevX].selected = false;
        }
        this.setState({
            board: newBoard,
            possibleMoves: newMoves,
            selectedPiece: newSelected,
        });
    }

    render(){
        return (
            <div className={"container mx-auto grid justify-center mt-10 grid-cols-4"}>
                <div className={"row-start-2"}>
                    <LostPieces team={"white"} pieces={Array.from(this.state.lostPieces.whites, ([typ, quantity]) => ({ typ, quantity }))} />
                </div>
                <p className={"text-xl text-white col-start-2 col-span-2 py-4 font-bold uppercase text-center"}>Turn: {this.state.turn}</p>
                <div className={"col-start-2 col-span-2 row-start-2 flex justify-center"}>
                    <Board boardPieces={this.state.board} handleClick={this.handleClick} moves={this.state.possibleMoves}/>
                </div>
                <div className={"row-start-2 col-start-4"}>
                    <LostPieces team={"black"} pieces={Array.from(this.state.lostPieces.blacks, ([typ, quantity]) => ({ typ, quantity }))} />
                </div>
            </div>
        );
    }
}

export default Chess;
