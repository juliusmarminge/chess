import {Position, PieceInterface, Team} from "../components/Chess";

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
    for (let blocked = false; !blocked && x > 0;)
    {
        if (pieces[y][x-1].team === "free")
            moves.push([x-1, y]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y][x-1].team === "black")
                moves.push([x-1, y]);
            if (piece.team === "black" && pieces[y][x-1].team === "white")
                moves.push([x-1, y]);
        }
        x--;
    }
    [x, y] = piece.position;
    for (let blocked = false; !blocked && x < 7;)
    {
        if (pieces[y][x+1].team === "free")
            moves.push([x+1, y]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y][x+1].team === "black")
                moves.push([x+1, y]);
            if (piece.team === "black" && pieces[y][x+1].team === "white")
                moves.push([x+1, y]);
        }
        x++;
    }
    [x, y] = piece.position;
    for (let blocked = false; !blocked && y < 7;) {
        if (pieces[y + 1][x].team === "free")
            moves.push([x, y+1]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y + 1][x].team === "black")
                moves.push([x, y+1]);
            if (piece.team === "black" && pieces[y + 1][x].team === "white")
                moves.push([x, y+1]);
        }
        y++;
    }
    [x, y] = piece.position;
    for (let blocked = false; !blocked && y > 0;)
    {
        if (pieces[y-1][x].team === "free")
            moves.push([x, y-1]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y-1][x].team === "black")
                moves.push([x, y-1]);
            if (piece.team === "black" && pieces[y-1][x].team === "white")
                moves.push([x, y-1]);
        }
        y--;
    }
    return moves;
}

function KnightMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    if (x+1 <= 7 && y+2 <= 7 && pieces[y+2][x+1].team !== piece.team)
        moves.push([x+1, y+2]);
    if (x+1 <= 7 && y-2 >= 0 && pieces[y-2][x+1].team !== piece.team)
        moves.push([x+1, y-2]);
    if (x+2 <= 7 && y+1 <= 7 && pieces[y+1][x+2].team !== piece.team)
        moves.push([x+2, y+1]);
    if (x+2 <= 7 && y-1 >= 0 && pieces[y-1][x+2].team !== piece.team)
        moves.push([x+2, y-1]);
    if (x-1 >= 0 && y-2 >= 0 && pieces[y-2][x-1].team !== piece.team)
        moves.push([x-1, y-2]);
    if (x-1 >= 0 && y+2 <= 7 && pieces[y+2][x-1].team !== piece.team)
        moves.push([x-1, y+2]);
    if (x-2 >= 0 && y-1 >= 0 && pieces[y-1][x-2].team !== piece.team)
        moves.push([x-2, y-1]);
    if (x-2 >= 0 && y+1 <= 7 && pieces[y+1][x-2].team !== piece.team)
        moves.push([x-2, y+1]);

    return moves;
}

function BishopMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    for (let blocked = false; !blocked && x > 0 && y > 0;)
    {
        if (pieces[y-1][x-1].team === "free")
            moves.push([x-1, y-1]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y-1][x-1].team === "black")
                moves.push([x - 1, y - 1]);
            if (piece.team === "black" && pieces[y-1][x-1].team === "white")
                moves.push([x - 1, y - 1]);
        }
        x--;
        y--;
    }
    [x, y] = piece.position;
    for (let blocked = false; !blocked && x < 7 && y > 0;)
    {
        if (pieces[y-1][x+1].team === "free")
            moves.push([x+1, y-1]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y-1][x+1].team === "black")
                moves.push([x+1, y-1]);
            if (piece.team === "black" && pieces[y-1][x+1].team === "white")
                moves.push([x+1, y-1]);
        }
        x++;
        y--;
    }
    [x, y] = piece.position;
    for (let blocked = false; !blocked && x > 0 && y < 7;)
    {
        if (pieces[y+1][x-1].team === "free")
            moves.push([x-1, y+1]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y+1][x-1].team === "black")
                moves.push([x-1, y+1]);
            if (piece.team === "black" && pieces[y+1][x-1].team === "white")
                moves.push([x-1, y+1]);
        }
        x--;
        y++;
    }
    [x, y] = piece.position;
    for (let blocked = false; !blocked && x < 7 && y < 7;)
    {
        if (pieces[y+1][x+1].team === "free")
            moves.push([x+1, y+1]);
        else {
            blocked = true;
            if (piece.team === "white" && pieces[y+1][x+1].team === "black")
                moves.push([x+1, y+1]);
            if (piece.team === "black" && pieces[y+1][x+1].team === "white")
                moves.push([x+1, y+1]);
        }
        x++;
        y++;
    }
    return moves;
}

function QueenMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let moves: Position[] = [];
    const straightMoves = RookMoves(piece, pieces);
    const diagonalMoves = BishopMoves(piece, pieces);
    moves.push(...straightMoves, ...diagonalMoves);
    return moves;
}

function KingMoves (piece: PieceInterface, pieces:PieceInterface[][]): Position[] {
    let [x, y] = piece.position;
    let moves: Position[] = [];
    if (x > 0 && y > 0 && pieces[y-1][x-1].team !== piece.team)
        moves.push([x-1, y-1]);
    if (x > 0 && pieces[y][x-1].team !== piece.team)
        moves.push([x-1, y]);
    if (x > 0 && y < 7 && pieces[y+1][x-1].team !== piece.team)
        moves.push([x-1, y+1]);
    if (y > 0 && pieces[y-1][x].team !== piece.team)
        moves.push([x, y-1]);
    if (y < 7 && pieces[y+1][x].team !== piece.team)
        moves.push([x, y+1]);
    if (x < 7 && y > 0 && pieces[y-1][x+1].team !== piece.team)
        moves.push([x+1, y-1]);
    if (x < 7 && pieces[y][x+1].team !== piece.team)
        moves.push([x+1, y]);
    if (x < 7 && y < 7 && pieces[y+1][x+1].team !== piece.team)
        moves.push([x+1, y+1]);
    moves = moves.filter(move => !canCheck(move, piece.team, pieces));
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

// canCheck(blackKingPos, black, board)
function canCheck(pos: Position, team: Team, board: PieceInterface[][]): boolean {
    let oppositeTeam = team === "white" ? "black" : "white";
    for (let row of board)
        for (let piece of row) {
            if (piece.typ === "king")
                continue;
            if (piece.team === oppositeTeam && piece.typ !== "pawn") {
                let moves = getPossibleMoves(piece, board);
                if (findMoveInMoves(pos, moves)) return true;
            }
            if (piece.team === "white") {

            }
        }
    return false;
}