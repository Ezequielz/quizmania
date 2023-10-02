import { Question } from '../interfaces'

export const getBGColor = (info: Question, index: number) => {
  const { correctAnswer, userSelectedAnswer } = info

  if (userSelectedAnswer == null) return
  if (index !== correctAnswer && index !== userSelectedAnswer) return ''
  if (index === correctAnswer) return 'green'
  if (index === userSelectedAnswer) return 'red'

  return ''
}
