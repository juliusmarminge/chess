import {
    faChessBishop,
    faChessKing,
    faChessKnight, faChessPawn,
    faChessQueen,
    faChessRook,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {PieceType, Team} from "./Chess";

export interface PProps {
    team: Team,
    typ: PieceType
}

function Piece ({typ, team}: PProps) {
    const teamClass = team === "white" ? "text-gray-300" : "text-black"
    return(
        typ !== "free" ? <FontAwesomeIcon
            className={`${teamClass} text-5xl p-0 m-0`}
            icon={
            typ === "rook"   ? faChessRook :
            typ === "knight" ? faChessKnight :
            typ === "bishop" ? faChessBishop :
            typ === "queen"  ? faChessQueen :
            typ === "king"   ? faChessKing :
            faChessPawn
        }
        /> : <p> </p>
    );
}

export default Piece;