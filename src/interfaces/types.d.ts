export interface Question {
  id: number
  level: string
  question: string
  code: string
  answers: string[]
  correctAnswer: number
  userSelectedAnswer?: number | null
  isCorrectUserAnswer?: boolean
  timeSelectedAnswer?: number
  help?: string
  helpUser?: boolean
  explanation?: string
  codeExample?: string
}
