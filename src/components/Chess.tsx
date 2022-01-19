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
            board        : initBoard(),
            selectedPiece: null,
            possibleMoves: [],
            turn: "white"
        }
    }
    selectPiece = (newX: number, newY: number) : void => {
        let newBoard = this.state.board.slice();
        let clickedPiece = newBoard[newY][newX];
        if (findMoveInMoves(clickedPiece.position, this.state.possibleMoves)) {
            let [x,y] = this.state.selectedPiece!;
            let oldPiece = newBoard[y][x];
            newBoard[newY][newX].typ = oldPiece.typ;
            newBoard[newY][newX].team = oldPiece.team;
            newBoard[y][x].typ = "free";
            newBoard[y][x].team = "free";
            // Send socket move has been done.
        }
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
            board        : newBoard,
            selectedPiece: newSelectedPiece,
            possibleMoves: newMoves
        });
    };
    render(){
        return (
            <Board boardPieces={this.state.board} selectPiece={this.selectPiece} moves={this.state.possibleMoves}/>
        );
    }
}

export default Chess;
