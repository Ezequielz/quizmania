import { useQuestionsStore } from '../store/questions'

export function useQuestions () {
  const questions = useQuestionsStore(state => state.questions)

  let correct = 0
  let incorrect = 0
  let unanswered = 0
  let stats = 0
  let helpUsed = 0

  questions.forEach(question => {
    const { userSelectedAnswer, correctAnswer, timeSelectedAnswer, helpUser } = question
    if (helpUser === true) helpUsed++

    if (userSelectedAnswer == null) unanswered++
    else if (userSelectedAnswer === correctAnswer) {
      if (timeSelectedAnswer !== undefined && timeSelectedAnswer >= 20) stats = stats + 100
      if (timeSelectedAnswer !== undefined && timeSelectedAnswer >= 10 && timeSelectedAnswer < 20) stats = stats + 75
      if (timeSelectedAnswer !== undefined && timeSelectedAnswer >= 1 && timeSelectedAnswer < 10) stats = stats + 30
      correct++
    } else incorrect++
  })

  stats = stats - (helpUsed * 5)

  if (stats <= 0) stats = 0

  return {
    correct,
    incorrect,
    unanswered,
    stats,
    helpUsed
  }
}
