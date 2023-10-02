import { useState, useEffect } from 'react'
import { useQuestionsStore } from '../store/questions'
import { INITIAL_TIME, TIMER_INTERVAL } from '../constants'

export const useCounter = () => {
  const [counter, setCounter] = useState(INITIAL_TIME)
  const currentQuestion = useQuestionsStore((state) => state.currentQuestion)
  const questions = useQuestionsStore((state) => state.questions)
  const info = questions[currentQuestion]
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)
  const userSelectedAnswer = questions[currentQuestion].userSelectedAnswer

  useEffect(() => {
    if (counter === 0 || typeof userSelectedAnswer !== 'undefined') {
      return
    }
    const intervalo = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1)
    }, TIMER_INTERVAL)

    return () => {
      clearInterval(intervalo)
    }
  }, [counter, userSelectedAnswer])

  useEffect(() => {
    setCounter(INITIAL_TIME)
  }, [currentQuestion])

  useEffect(() => {
    if (counter === 0) {
      selectAnswer(info.id, 10, counter)
    }
  }
  , [counter])

  return counter
}
