import {PieceInterface} from "../components/Chess";

export function initBoard() : PieceInterface[][] {
    return [
        [
            { typ: "rook", team: "black", position: [0,0], selected: false},
            { typ: "knight", team: "black", position: [0,1], selected: false},
            { typ: "bishop", team: "black", position: [0,2], selected: false},
            { typ: "queen", team: "black", position: [0,3], selected: false},
            { typ: "king", team: "black", position: [0,4], selected: false},
            { typ: "bishop", team: "black", position: [0,5], selected: false},
            { typ: "knight", team: "black", position: [0,6], selected: false},
            { typ: "rook", team: "black", position: [0,7], selected: false},
        ],
        [
            { typ: "pawn", team: "black", position: [1,0], selected: false},
            { typ: "pawn", team: "black", position: [1,1], selected: false},
            { typ: "pawn", team: "black", position: [1,2], selected: false},
            { typ: "pawn", team: "black", position: [1,3], selected: false},
            { typ: "pawn", team: "black", position: [1,4], selected: false},
            { typ: "pawn", team: "black", position: [1,5], selected: false},
            { typ: "pawn", team: "black", position: [1,6], selected: false},
            { typ: "pawn", team: "black", position: [1,7], selected: false},
        ],
        [
            {typ: "free", team: "free", position: [2,0], selected: false},
            {typ: "free", team: "free", position: [2,1], selected: false},
            {typ: "free", team: "free", position: [2,2], selected: false},
            {typ: "free", team: "free", position: [2,3], selected: false},
            {typ: "free", team: "free", position: [2,4], selected: false},
            {typ: "free", team: "free", position: [2,5], selected: false},
            {typ: "free", team: "free", position: [2,6], selected: false},
            {typ: "free", team: "free", position: [2,7], selected: false}
        ],
        [
            {typ: "free", team: "free", position: [3,0], selected: false},
            {typ: "free", team: "free", position: [3,1], selected: false},
            {typ: "free", team: "free", position: [3,2], selected: false},
            {typ: "free", team: "free", position: [3,3], selected: false},
            {typ: "free", team: "free", position: [3,4], selected: false},
            {typ: "free", team: "free", position: [3,5], selected: false},
            {typ: "free", team: "free", position: [3,6], selected: false},
            {typ: "free", team: "free", position: [3,7], selected: false}
        ],
        [
            {typ: "free", team: "free", position: [4,0], selected: false},
            {typ: "free", team: "free", position: [4,1], selected: false},
            {typ: "free", team: "free", position: [4,2], selected: false},
            {typ: "free", team: "free", position: [4,3], selected: false},
            {typ: "free", team: "free", position: [4,4], selected: false},
            {typ: "free", team: "free", position: [4,5], selected: false},
            {typ: "free", team: "free", position: [4,6], selected: false},
            {typ: "free", team: "free", position: [4,7], selected: false}
        ],
        [
            {typ: "free", team: "free", position: [5,0], selected: false},
            {typ: "free", team: "free", position: [5,1], selected: false},
            {typ: "free", team: "free", position: [5,2], selected: false},
            {typ: "free", team: "free", position: [5,3], selected: false},
            {typ: "free", team: "free", position: [5,4], selected: false},
            {typ: "free", team: "free", position: [5,5], selected: false},
            {typ: "free", team: "free", position: [5,6], selected: false},
            {typ: "free", team: "free", position: [5,7], selected: false}
        ],
        [
            { typ: "pawn", team: "white", position: [6,0], selected: false},
            { typ: "pawn", team: "white", position: [6,1], selected: false},
            { typ: "pawn", team: "white", position: [6,2], selected: false},
            { typ: "pawn", team: "white", position: [6,3], selected: false},
            { typ: "pawn", team: "white", position: [6,4], selected: false},
            { typ: "pawn", team: "white", position: [6,5], selected: false},
            { typ: "pawn", team: "white", position: [6,6], selected: false},
            { typ: "pawn", team: "white", position: [6,7], selected: false},
        ],
        [
            { typ: "rook", team: "white", position: [7,0], selected: false},
            { typ: "knight", team: "white", position: [7,1], selected: false},
            { typ: "bishop", team: "white", position: [7,2], selected: false},
            { typ: "king", team: "white", position: [7,3], selected: false},
            { typ: "queen", team: "white", position: [7,4], selected: false},
            { typ: "bishop", team: "white", position: [7,5], selected: false},
            { typ: "knight", team: "white", position: [7,6], selected: false},
            { typ: "rook", team: "white", position: [7,7], selected: false},
        ],
    ];
}
