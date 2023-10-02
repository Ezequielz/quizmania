import { useCounter } from '../hooks'
import { useQuestionsStore } from '../store/questions'
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

export const HeaderGame = () => {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const nextQuestion = useQuestionsStore(state => state.nextQuestion)
  const prevQuestion = useQuestionsStore(state => state.prevQuestion)
  const counter = useCounter()

  return (
    <div className='flex justify-center items-center gap-2 lg:w-[40%]'>
      {
        questions[currentQuestion].userSelectedAnswer !== undefined &&
          <div className='flex items-center'>
            <button
              className='p-2 m-2 rounded-lg bg-cyan-600 dark:bg-slate-800 text-white'
              disabled={currentQuestion === 0}
              onClick={prevQuestion}
            ><FaArrowLeft />
            </button>
            <span>
              {currentQuestion + 1} / {questions.length}
            </span>
            <button
              className='p-2 m-2 rounded-lg bg-cyan-600 dark:bg-slate-800 text-white'
              disabled={currentQuestion === questions.length - 1 || questions[currentQuestion].userSelectedAnswer === undefined}
              onClick={nextQuestion}
            ><FaArrowRight />
            </button>

          </div>
      }

      {
        questions[currentQuestion].userSelectedAnswer === undefined
          ? (
            <span className='text-[#e7c83d]'> {counter} </span>
            )
          : (
            <span className=''>{questions[currentQuestion].timeSelectedAnswer}</span>
            )
      }
      {
        counter === 0 &&
          <button
            data-te-ripple-init
            data-te-toggle={`${currentQuestion === questions.length - 1 ? 'modal' : 'none'}`}
            data-te-target='#staticBackdrop'
            data-te-ripple-color='light'
          >ver resultados
          </button>
      }

    </div>
  )
}
