import {PieceInterface, Position, Team} from "../components/Chess";
import {findMoveInMoves, getPossibleMoves} from "./getMoves";

export function hasChecked(team: Team, kingPos: Position, board: PieceInterface[][]): boolean {
    for (let row of board)
        for (let piece of row) {
            if (piece.team === team) {
                let moves = getPossibleMoves(piece, board);
                if (findMoveInMoves(kingPos, moves)) return true;
            }
        }
    return false;
}