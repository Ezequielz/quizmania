import { LEVEL_QUESTIONS } from '../constants'
import { useQuestionsStore } from '../store/questions'

export const LevelGame = () => {
  const changeLevel = useQuestionsStore(state => state.changeLevel)
  const levelQuestions = useQuestionsStore(state => state.levelQuestions)
  const handleLevel = (level: string | null) => {
    changeLevel(level)
  }
  return (
    <div className=''>
      <strong className='block text-sm font-bold text-gray-700 dark:text-gray-200'>NIVEL</strong>
      <div className='flex gap-2 justify-center items-center mt-2'>
        <button
          data-te-ripple-init
          data-te-ripple-color='light'
          style={{
            backgroundColor: levelQuestions === LEVEL_QUESTIONS.FACIL ? '#00C853' : '',
            color: levelQuestions === LEVEL_QUESTIONS.FACIL ? '#fff' : ''
          }}
          className='inline-block tracking-widest rounded-full border-2 border-success px-6 pb-[6px] pt-2 text-xs font-bold uppercase leading-normal text-success transition duration-150 ease-in-out hover:border-success-600 hover:bg-success-300 hover:bg-opacity-10 dark:hover:text-success-100 focus:border-success-600 focus:text-success-600 focus:outline-none focus:ring-0 active:border-success-700 active:text-success-700 dark:hover:bg-success hover:scale-105 dark:hover:bg-opacity-10'
          onClick={() => handleLevel(LEVEL_QUESTIONS.FACIL)}
        >FACIL
        </button>
        <button
          data-te-ripple-init
          data-te-ripple-color='light'
          style={{
            backgroundColor: levelQuestions === LEVEL_QUESTIONS.MEDIO ? 'rgb(163 115 19)' : '',
            color: levelQuestions === LEVEL_QUESTIONS.MEDIO ? '#fff' : ''
          }}
          className='inline-block tracking-widest rounded-full border-2 border-warning px-6 pb-[6px] pt-2 text-xs font-bold uppercase leading-normal text-warning transition duration-150 ease-in-out hover:border-warning-600 hover:bg-warning-300 hover:bg-opacity-10 dark:hover:text-warning-100 focus:border-warning-600 focus:text-warning-600 focus:outline-none focus:ring-0 active:border-warning-700 active:text-warning-700 dark:hover:bg-warning hover:scale-105 dark:hover:bg-opacity-10'
          onClick={() => handleLevel(LEVEL_QUESTIONS.MEDIO)}
        >MEDIO
        </button>
        <button
          data-te-ripple-init
          data-te-ripple-color='light'
          style={{
            backgroundColor: levelQuestions === LEVEL_QUESTIONS.DIFICIL ? 'rgb(220 76 100)' : '',
            color: levelQuestions === LEVEL_QUESTIONS.DIFICIL ? '#fff' : ''
          }}
          className='inline-block tracking-widest rounded-full border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-bold uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-danger-300 hover:bg-opacity-10 dark:hover:text-danger-100 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-danger hover:scale-105 dark:hover:bg-opacity-10'
          onClick={() => handleLevel(LEVEL_QUESTIONS.DIFICIL)}
        >DIFICIL
        </button>
      </div>
    </div>
  )
}
