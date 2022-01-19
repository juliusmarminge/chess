import {PieceType, Team} from "./Chess";
import {faChess} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Piece from "./Piece";


interface LPProps {
    team: Team,
    pieces: {typ: PieceType, quantity: number}[],
}

function LostPieces ({team, pieces}: LPProps) {
    let color = team === "white" ? "text-gray-300" : "text-black";
    return (
        <div className={`container ${color} text-center`}>
            <div className={"py-4"}>
                <FontAwesomeIcon icon={faChess} className={"text-4xl"}/>
            </div>
            {pieces.map((piece, idx) => {
                return (
                    <div className={"grid grid-flow-col"} key={idx}>
                        <div className={""}>
                            <Piece team={team} typ={piece.typ} size={"2xl"}/>
                        </div>
                        <p className={`font-bold text-2xl ${color}`}>{piece.quantity}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default LostPieces;