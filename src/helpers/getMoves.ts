import {Position, PieceInterface} from "../components/Chess";

export function getPossibleMoves(piece: PieceInterface, pieces: PieceInterface[][]): Position[] | null {
    let moves: Position[] = [];
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

function RookMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [y, x] = piece.position;
    let moves: Position[] = [];
    let stop = false;
    while(!stop) {
        stop = true;
    }
    return moves;
}

function KnightMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [y, x] = piece.position;
    let moves: Position[] = [];
    return moves;
}

function BishopMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [y, x] = piece.position;
    let moves: Position[] = [];
    return moves;
}

function QueenMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [y, x] = piece.position;
    let moves: Position[] = [];

    return [
        [x-1, y-1], [x-1, y], [x-1, y+1],
        [x, y-1], [x, y+1],
        [x+1, y-1], [x+1, y], [x+1, y+1]
    ];
}

function KingMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [y, x] = piece.position;
    let moves: Position[] = [];
    return moves;
}

function PawnMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [y, x] = piece.position;
    let moves: Position[] = [];
    if (piece.team === "white") {
        if (pieces[y-1][x].team === "free")
            moves.push([y-1, x]);
        if (pieces[y-1][x-1]?.team === "black")
            moves.push([y-1, x-1]);
        if (pieces[y-1][x+1]?.team === "black")
            moves.push([y-1, x+1]);
    }
    else {
        if (pieces[y+1][x].team === "free")
            moves.push([y+1, x]);
        if (pieces[y+1][x-1]?.team === "white")
            moves.push([y+1, x-1]);
        if (pieces[y+1][x+1]?.team === "white")
            moves.push([y+1, x+1]);
    }
    return moves;
}

export function findMoveInMoves(pos: Position, moves: Position[]): boolean {
    for (let move of moves)
       if (pos[0] === move[1] && pos[1] === move[0])
           return true;
    return false;
}