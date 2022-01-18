import {PieceInterface, Team} from "../components/Chess";

type MovesInterface = [number, number][];

export function getPossibleMoves(piece: PieceInterface, pieces: PieceInterface[][]): MovesInterface | null {
    let moves = [];
    switch (piece.typ) {
        case "free":
            return null;
        case "rook":
            moves = RookMoves(piece, pieces);
            break;
        case "knight":
            moves = KnightMoves(piece, pieces);
            break;
        case "bishop":
            moves = BishopMoves(piece, pieces);
            break;
        case "queen":
            moves = QueenMoves(piece, pieces);
            break;
        case "king":
            moves = KingMoves(piece, pieces);
            break;
        case "pawn":
            moves = PawnMoves(piece, pieces);
            break;
    }
    return moves;
}

function RookMoves (piece: PieceInterface, pieces:PieceInterface[][]): MovesInterface {
    let [y, x] = piece.position;
    let moves: MovesInterface = [];
    return moves;
}

function KnightMoves (piece: PieceInterface, pieces:PieceInterface[][]): MovesInterface {
    let [y, x] = piece.position;
    let moves: MovesInterface = [];
    return moves;
}

function BishopMoves (piece: PieceInterface, pieces:PieceInterface[][]): MovesInterface {
    let [y, x] = piece.position;
    let moves: MovesInterface = [];
    return moves;
}

function QueenMoves (piece: PieceInterface, pieces:PieceInterface[][]): MovesInterface {
    let [y, x] = piece.position;
    let moves: MovesInterface = [];

    return [
        [x-1, y-1], [x-1, y], [x-1, y+1],
        [x, y-1], [x, y+1],
        [x+1, y-1], [x+1, y], [x+1, y+1]
    ];
}

function KingMoves (piece: PieceInterface, pieces:PieceInterface[][]): MovesInterface {
    let [y, x] = piece.position;
    let moves: MovesInterface = [];
    return moves;
}

function PawnMoves (piece: PieceInterface, pieces:PieceInterface[][]): MovesInterface {
    let [y, x] = piece.position;
    let moves: MovesInterface = [];
    if (piece.team === "white") {

    }
    return moves;
}