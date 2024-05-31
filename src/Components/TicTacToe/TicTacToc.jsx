import React from 'react'
import './TicTacToe.css'
import circle_icon from '../Assects/circle.png'
import cross_icon from '../Assects/cross.png'
const TicTacToc = () => {
    return (
        <div className='container'>
            <h1 className='title'>Tic Tac Toe Game In <span>React</span></h1>
            <div className='board'>
                <div className='row1'>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className='row2'>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
                <div className='row3'>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                    <div className="boxes"></div>
                </div>
            </div>
            <button className='reset'>Reset</button>
        </div>
    )
}

export default TicTacToc
