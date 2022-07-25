import { useState, useEffect } from 'react'
import { getRemainingTimeUntilMsTimestamp } from '../helpers/CountdownTimerUtils'
import styled from 'styled-components'

const defaultRemainingTime = {
  seconds: '00',
  minutes: '00',
  hours: '00',
  days: '00',
}

const ContenedorTimer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    gap: 2rem;
    border: 2px solid white;
    border-radius: 10px;
    margin: 4rem 0;
    @media (max-width: 800px){
       padding: .8rem 1.8rem
    }
    .time-box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span:first-child {
            font-size: 3.5rem;
            color: white;
            @media (max-width: 768px){
                font-size: 1.8rem;
            }
            @media (max-width: 385px){
                font-size: 1.6rem;
            }
        }
        span:last-child {
            font-size: 3rem;
            color: white;
            font-weight: 700;
            @media (max-width: 768px){
                font-size: 2rem;
            }
            @media (max-width: 385px){
                font-size: 1.5rem;
            }
        }
    }
`


const CountdownTimer = ({ countdownTimestampMs }) => {

    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime)

    useEffect(() => {
      const intervalId = setInterval(() => {
        updateRemainingTime(countdownTimestampMs)
      }, 1000)
      return () => clearInterval(intervalId)
    }, [countdownTimestampMs])

    const updateRemainingTime = (countdown) => {
      setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown))
    }

    return (
        <ContenedorTimer className='countdown-timer'>
          <div className='time-box'>
            <span>{remainingTime.days}</span>
            <span>Días</span>
          </div>
          <div className='time-box'>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span>Horas</span>
          </div>
          <div className='time-box'>
            <span className='two-numbers'>{remainingTime.minutes}</span>
            <span>Minutos</span>
          </div>
          <div className='time-box'>
            <span className='two-numbers'>{remainingTime.seconds}</span>
            <span>Segundos</span>
          </div>
        </ContenedorTimer>
    )
}

export default CountdownTimer