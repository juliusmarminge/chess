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
    typ: PieceType,
    size: string,
}

function Piece ({typ, team, size}: PProps) {
    const teamClass = team === "white" ? "text-gray-300" : team === "black" ? "text-black" : "text-transparent"
    return(
        <div className={""}>
            <FontAwesomeIcon
            className={`${teamClass} fa-fw ${size} p-0 m-0`}
            icon={
                typ === "rook" ? faChessRook :
                typ === "knight" ? faChessKnight :
                typ === "bishop" ? faChessBishop :
                typ === "queen" ? faChessQueen :
                typ === "king" ? faChessKing :
                faChessPawn
            } />
        </div>
    );
}

export default Piece;