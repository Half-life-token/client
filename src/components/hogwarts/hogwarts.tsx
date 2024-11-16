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
                            <div className="info__item">Physicist</div>
                            <div className="info__detail">J. Robert Oppenheimer</div>
                        </div>

                        <div className="info platform">
                            <span>ETH</span>
                            <span>USDC</span>
                            <span>BASE</span>
                            <div className="number">
                                <div>λ</div>
                                <div>
                                    <span>1</span>
                                    <span>2</span>
                                </div>
                            </div>
                        </div>

                        <div className="info departure">
                            <div className="info__item">Origin</div>
                            <div className="info__detail">University of Chicago</div>
                        </div>

                        <div className="info arrival">
                            <div className="info__item">Destination</div>
                            <div className="info__detail">Los Alamos</div>
                        </div>

                        <div className="info date">
                            <div className="info__item">Date</div>
                            <div className="info__detail">16 Jul 1945</div>
                        </div>

                        <div className="info time">
                            <div className="info__item">Time</div>
                            <div className="info__detail">05:29AM</div>
                        </div>

                        <div className="info carriage">
                            <div className="info__item">Site</div>
                            <div className="info__detail">Y</div>
                        </div>

                        <div className="info seat">
                            <div className="info__item">Lab</div>
                            <div className="info__detail">U235</div>
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
                            <div className="info__item">Destination</div>
                            <div className="info__detail">Los Alamos</div>
                        </div>

                        <div className="info side-depart">
                            <div className="info__item">Origin</div>
                            <div className="info__detail">University of Chicago</div>
                        </div>

                        <div className="info side-date">
                            <div className="info__item">Date</div>
                            <div className="info__detail">1945</div>
                        </div>

                        <div className="info side-time">
                            <div className="info__item">Time</div>
                            <div className="info__detail">05:29AM</div>
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

