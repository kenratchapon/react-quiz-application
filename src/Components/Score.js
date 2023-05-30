import React, { useContext } from 'react'
import { DataContext } from '../App'
import QuestionsData from '../data/QuestionsData'

const Score = () => {
    const {score,setScore,setAppState} = useContext(DataContext)
    const restartApp=()=>{
        setAppState('menu')
        setScore(0)
    }
    return (
        <div className='score'>
            <h1>Score</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={restartApp}>Try Again</button>
        </div>
    )
}

export default Score