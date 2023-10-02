import { Question } from '../interfaces'

interface QuestionService {
  limit: number
  levelQuestions: string
  categoryQuestions: string
}

const urlQuestions: string = import.meta.env.VITE_URL_QUESTIONS

export const getAllQuestions = async ({ limit, levelQuestions, categoryQuestions }: QuestionService) => {
  const res = await fetch(`${urlQuestions}/${categoryQuestions}Data.json`)
  const data = await res.json()

  const dataFilteredByLevel = await data.filter((question: Question) => question.level === levelQuestions)
  const questions = dataFilteredByLevel.sort(() => Math.random() - 0.5).slice(0, limit)

  return questions
}
