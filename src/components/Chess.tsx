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
    pieces: PieceInterface[][],
    selectedPiece: Position | null,
    possibleMoves: Position[],
}
class Chess extends React.Component<MyProps, MyState>{
    constructor(props : MyProps) {
        super(props);
        this.state = {
            pieces: initBoard(),
            selectedPiece: null,
            possibleMoves: [],
        }
    }
    selectPiece = (newX: number, newY: number) : void => {
        let newPieces = this.state.pieces.slice();
        let newSelected = newPieces[newY][newX];
        console.log(newSelected.position)
        if (this.state.possibleMoves && findMoveInMoves(newSelected.position, this.state.possibleMoves)) {
            let [x,y] = this.state.selectedPiece!;
            console.log(`Move from (${x},${y}) to (${newX},${newY})`)
            let oldPiece = newPieces[y][x];
            console.log(oldPiece)
            newPieces[newY][newX].typ = oldPiece.typ;
            newPieces[newY][newX].team = oldPiece.team;
            newPieces[y][x].typ = "free";
            newPieces[y][x].team = "free";
            console.log(newPieces[newY][newX].typ)
        }
        if (newSelected.typ !== "free") {
            newSelected.selected = !newSelected.selected;
        }
        let newSelectedPiece = newSelected.selected ? [newX, newY] as Position : null
        if (this.state.selectedPiece) {
            let [x, y] = this.state.selectedPiece;
            newPieces[y][x].selected = false;
        }
        let newMoves = getPossibleMoves(newSelected, newPieces);
        this.setState({
            pieces: newPieces,
            selectedPiece: newSelectedPiece,
            possibleMoves: newMoves
        });
    };
    render(){
        return (
            <Board boardPieces={this.state.pieces} selectPiece={this.selectPiece} moves={this.state.possibleMoves}/>
        );
    }
}

export default Chess;
