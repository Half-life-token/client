import './ticket.scss';

export default function Ticket() {
    return (
        <div className="ticketContainer">
            <div className="ticket">
                <div className="ticketTitle">HΔLF LΨFE</div>
                <div>
                    <div className="ticketDetail">
                        <div>Hash:&nbsp; 0x1234567890abcdef</div>
                    </div>
                    <div className="ticketRip">
                        <div className="circleLeft"></div>
                        <div className="ripLine"></div>
                        <div className="circleRight"></div>
                    </div>
                    <div className="ticketSubDetail">
                        <div className="code">LO-2314XXX</div>
                        <div className="date"> Nov 16<sup>th</sup> 2024</div>
                    </div>
                </div>
            </div>
            <div className="ticketShadow"></div>
        </div>
    );
}
