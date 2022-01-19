import {Position, PieceInterface} from "../components/Chess";

export function getPossibleMoves(piece: PieceInterface, pieces: PieceInterface[][]): Position[] {
    let moves: Position[] = [];
    switch (piece.typ) {
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

function RookMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    let stop = false;
    while(!stop) {
        stop = true;
    }
    return moves;
}

function KnightMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    return moves;
}

function BishopMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    return moves;
}

function QueenMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];

    return moves;
}

function KingMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    return moves;
}

function PawnMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    if (piece.team === "white" && y > 0) {
        if (pieces[y-1][x].team === "free")
            moves.push([x, y-1]);
        if (y == 6 && pieces[y-2][x].team === "free")
            moves.push([x, y-2]);
        if (x > 0 && pieces[y-1][x-1]?.team === "black")
            moves.push([x-1, y-1]);
        if (x < 7 && pieces[y-1][x+1]?.team === "black")
            moves.push([x+1, y-1]);
    }
    else if (piece.team === "black" && y < 7){
        if (pieces[y+1][x].team === "free")
            moves.push([x, y+1]);
        if (y == 1 && pieces[y+2][x].team === "free")
            moves.push([x, y+2]);
        if (x > 0 && pieces[y+1][x-1]?.team === "white")
            moves.push([x-1, y+1]);
        if (x < 7 && pieces[y+1][x+1]?.team === "white")
            moves.push([x+1, y+1]);
    }
    return moves;
}

export function findMoveInMoves(pos: Position, moves: Position[]): boolean {
    for (let move of moves)
       if (pos[0] === move[0] && pos[1] === move[1])
           return true;
    return false;
}