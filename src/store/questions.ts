import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import confetti from 'canvas-confetti'

import { Question } from '../interfaces'
import { getAllQuestions } from '../services'

interface State {
  categoryQuestions: string | null
  currentQuestion: number
  isLoadingQuestion: boolean
  levelQuestions: string | null
  questions: Question[]

  changeCategoryQuestions: (category: string | null) => void
  changeLevel: (level: string | null) => void
  fetchQuestions: (limit: number) => Promise<void>
  nextQuestion: () => void
  prevQuestion: () => void
  resetCategoryLevel: () => void
  resetGame: () => void
  selectAnswer: (questionid: number, answerIndex: number, time: number) => void
  toogleLoadingQuestion: (value: boolean) => void
  changeHelp: (questionid: number, helpUser: boolean) => void
}

export const useQuestionsStore = create<State>()(devtools((set, get) => {
  return {
    questions: [],
    currentQuestion: 0,
    isLoadingQuestion: false,
    levelQuestions: null,
    categoryQuestions: null,

    fetchQuestions: async (limit: number) => {
      const { levelQuestions, categoryQuestions } = get()
      if (levelQuestions !== null && categoryQuestions !== null) {
        const questions = await getAllQuestions({ limit, levelQuestions, categoryQuestions })
        set({ questions }, false, 'FETCH_QUESTIONS')
      }
    },
    toogleLoadingQuestion: (value: boolean) => {
      set({
        isLoadingQuestion: value
      }, false, 'TOGGLE_LOADING_QUESTION')
    },
    changeLevel: (level: string | null) => {
      set({
        questions: [],
        currentQuestion: 0,
        levelQuestions: level
      }, false, 'CHANGE_LEVEL')
    },
    changeCategoryQuestions: (category: string | null) => {
      if (category !== null) {
        set({
          questions: [],
          currentQuestion: 0,
          categoryQuestions: category
        }, false, 'CHANGE_CATEGORY_QUESTIONS')
      }
    },
    changeHelp: (questionid: number, helpUser: boolean) => {
      const state = get()
      const questions = state.questions
      const newQuestions: Question[] = structuredClone(questions)

      const questionIndex = newQuestions.findIndex(q => q.id === questionid)
      const questionInfo = newQuestions[questionIndex]

      newQuestions[questionIndex] = {
        ...questionInfo,
        helpUser
      }
      set({
        questions: newQuestions
      }, false, 'CHANGE_HELP')
    },
    resetGame: () => {
      set({
        currentQuestion: 0
      }, false, 'RESET_GAME')
    },
    resetCategoryLevel: () => {
      set({
        questions: [],
        currentQuestion: 0
      }, false, 'RESET_CATEGORY_LEVEL')
    },
    selectAnswer: (questionid: number, answerIndex: number, time: number) => {
      const state = get()
      const questions = state.questions
      const newQuestions: Question[] = structuredClone(questions)

      const questionIndex = newQuestions.findIndex(q => q.id === questionid)
      const questionInfo = newQuestions[questionIndex]
      const isCorrectUserAnswer = questionInfo.correctAnswer === answerIndex
      const timeSelectedAnswer = time
      // eslint-disable-next-line @typescript-eslint/prefer-nullish-coalescing, @typescript-eslint/strict-boolean-expressions
      const helpUser = questionInfo.helpUser || false
      if (isCorrectUserAnswer) { confetti() }

      newQuestions[questionIndex] = {
        ...questionInfo,
        isCorrectUserAnswer,
        helpUser,
        timeSelectedAnswer,
        userSelectedAnswer: answerIndex
      }
      set({
        questions: newQuestions
      }, false, 'SELECT_ANSWER')
    },
    nextQuestion: () => {
      const { currentQuestion, questions } = get()
      const nextQuestion = currentQuestion + 1

      if (nextQuestion < questions.length) {
        set({ currentQuestion: nextQuestion }, false, 'NEXT_QUESTION')
      }
    },
    prevQuestion: () => {
      const { currentQuestion } = get()
      const prevQuestion = currentQuestion - 1

      if (prevQuestion >= 0) {
        set({ currentQuestion: prevQuestion }, false, 'PREV_QUESTION')
      }
    }
  }
}
))
