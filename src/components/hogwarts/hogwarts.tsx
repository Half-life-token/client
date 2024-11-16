import React from 'react';
import "./hogwarts.scss";

export const Hogwarts = () => {
    return (
        <div className='hogwarts'>
            <div className="main-content">
                <div className="ticket">
                    <div className="ticket__main">
                        <div className="header">HΔLF LΨFE</div>

                        <div className="info passenger">
                            <div className="info__item">Passenger</div>
                            <div className="info__detail">Hermione J. Granger</div>
                        </div>

                        <div className="info platform">
                            <span>ETH</span>
                            <span>GWEI</span>
                            <span>BASE</span>
                            <div className="number">
                                <div>9</div>
                                <div>
                                    <span>3</span>
                                    <span>4</span>
                                </div>
                            </div>
                        </div>

                        <div className="info departure">
                            <div className="info__item">Depart</div>
                            <div className="info__detail">King's Cross</div>
                        </div>

                        <div className="info arrival">
                            <div className="info__item">Arrive</div>
                            <div className="info__detail">Hogsmeade</div>
                        </div>

                        <div className="info date">
                            <div className="info__item">Date</div>
                            <div className="info__detail">1 Sep 2018</div>
                        </div>

                        <div className="info time">
                            <div className="info__item">Time</div>
                            <div className="info__detail">11:00AM</div>
                        </div>

                        <div className="info carriage">
                            <div className="info__item">Car</div>
                            <div className="info__detail">4</div>
                        </div>

                        <div className="info seat">
                            <div className="info__item">Seat</div>
                            <div className="info__detail">6B</div>
                        </div>




                        <div className="barcode">
                            <div className="barcode__scan"></div>
                            <div className="barcode__id">001256733</div>
                        </div>
                    </div>

                    <div className="ticket__side">
                        <div className="logo">
                            <p>HΔLFLΨFE</p>
                        </div>

                        <div className="info side-arrive">
                            <div className="info__item">Arrive</div>
                            <div className="info__detail">Hogsmeade</div>
                        </div>

                        <div className="info side-depart">
                            <div className="info__item">Depart</div>
                            <div className="info__detail">King's Cross</div>
                        </div>

                        <div className="info side-date">
                            <div className="info__item">Date</div>
                            <div className="info__detail">2018</div>
                        </div>

                        <div className="info side-time">
                            <div className="info__item">Time</div>
                            <div className="info__detail">11:00AM</div>
                        </div>

                        <div className="barcode">
                            <div className="barcode__scan"></div>
                            <div className="barcode__id">00125623</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

