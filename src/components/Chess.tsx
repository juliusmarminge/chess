import React from 'react';
import Board from '../components/Board';
import {initBoard} from "../helpers/initBoard";
import {findMoveInMoves, getPossibleMoves} from "../helpers/getMoves";

export interface PieceInterface {
    typ: PieceType,
    team: Team,
    position: Position
    selected: boolean,
}
export type Position = [number, number];
export type Team = "white" | "black" | "free";
export type PieceType = "rook" | "knight" | "bishop" | "queen" | "king" | "pawn" | "free";

interface MyProps {}
interface MyState {
    board: PieceInterface[][],
    selectedPiece: Position | null,
    possibleMoves: Position[],
    turn: Team,
}
class Chess extends React.Component<MyProps, MyState>{
    constructor(props : MyProps) {
        super(props);
        this.state = {
            board: initBoard(),
            selectedPiece: null,
            possibleMoves: [],
            turn: "white"
        }
    }
    selectPiece = (newX: number, newY: number) : void => {
        let clickedPiece = this.state.board[newY][newX];
        if (findMoveInMoves(clickedPiece.position, this.state.possibleMoves)) {
            this.makeMove(this.state.selectedPiece!, clickedPiece.position);
            return;
        }
        if (clickedPiece.team !== this.state.turn)
            return;
        let newBoard = this.state.board.slice();
        let newSelectedPiece: Position | null = null;
        if (clickedPiece.typ !== "free") {
            if (clickedPiece.selected) {
                clickedPiece.selected = false;
                newSelectedPiece = null;
            }
            else {
                clickedPiece.selected = true;
                newSelectedPiece = [newX, newY] as Position;
            }
        }
        if (this.state.selectedPiece) {
            let [x, y] = this.state.selectedPiece;
            newBoard[y][x].selected = false;
        }
        let newMoves = newSelectedPiece ? getPossibleMoves(clickedPiece, newBoard) : [];
        this.setState({
            board: newBoard,
            selectedPiece: newSelectedPiece,
            possibleMoves: newMoves
        });
    }

    makeMove(oldPos: Position, newPos: Position) {
        let newBoard = this.state.board.slice();
        let oldPiece = newBoard[oldPos[1]][oldPos[0]];
        let newPiece = newBoard[newPos[1]][newPos[0]];
        newPiece.typ = oldPiece.typ;
        newPiece.team = oldPiece.team;
        oldPiece.typ = "free";
        oldPiece.team = "free";
        oldPiece.selected = false;
        this.setState({
            board: newBoard,
            selectedPiece: null,
            possibleMoves: [],
            turn: this.state.turn === "white" ? "black" : "white"
        });
    }

    render(){
        return (
            <>
                <p className={"text-xl text-white font-bold p-2"}>Turn: {this.state.turn}</p>
                <Board boardPieces={this.state.board} selectPiece={this.selectPiece} moves={this.state.possibleMoves}/>
            </>
        );
    }
}

export default Chess;
