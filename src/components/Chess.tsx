import React, {useState} from 'react';
import Board from '../components/Board';
import {initBoard} from "../helpers/initBoard";
import {getPossibleMoves} from "../helpers/getMoves";

export interface PieceInterface {
    typ: PieceType,
    team: Team,
    position: [number, number]
    selected: boolean,
}
export type Team = "white" | "black" | "free";
export type PieceType = "rook" | "knight" | "bishop" | "queen" | "king" | "pawn" | "free";

interface MyProps {}
interface MyState {
    pieces: PieceInterface[][],
    selectedPiece: [number, number] | null,
    possibleMoves: [number, number][] | null,
}
class Chess extends React.Component<MyProps, MyState>{
    constructor(props : MyProps) {
        super(props);
        this.state = {
            pieces: initBoard(),
            selectedPiece: null,
            possibleMoves: null,
        }
    }
    selectPiece = (newX: number, newY: number) : void => {
        let newPieces = this.state.pieces.slice();
        if (this.state.selectedPiece) {
            let [y, x] = this.state.selectedPiece;
            newPieces[y][x].selected = false;
        }
        let newSelected = newPieces[newY][newX];
        console.log(`You clicked: ${newSelected.position[1]}x, ${newSelected.position[0]}y`);

        if (newSelected.typ !== "free") {
            newSelected.selected = !newSelected.selected;
        }
        let newMoves = getPossibleMoves(newSelected, newPieces);
        this.setState({
            pieces: newPieces,
            selectedPiece: [newY, newX],
            possibleMoves: newMoves
        });
        console.log(`Possible Moves: ${newMoves}`);
    };
    render(){
        return (
            <Board boardPieces={this.state.pieces} selectPiece={this.selectPiece} />
        );
    }
}

export default Chess;
