import { CategoryGame, LevelGame } from '.'
import { useQuestionsStore } from '../store/questions'

export const StartGame = () => {
  const fetchQuestions = useQuestionsStore(state => state.fetchQuestions)
  const toogleLoadingQuestion = useQuestionsStore(state => state.toogleLoadingQuestion)
  const levelQuestions = useQuestionsStore(state => state.levelQuestions)
  const categoryQuestions = useQuestionsStore(state => state.categoryQuestions)

  // const isLoadingQuestion = useQuestionsStore(state => state.isLoadingQuestion)

  const handleClick = () => {
    toogleLoadingQuestion(true)

    setTimeout(() => {
      fetchQuestions(5)
      toogleLoadingQuestion(false)
    }, 1000)
  }

  return (
    <div className='text-center mt-5 min-h-full'>
      <CategoryGame />
      <LevelGame />
      <button
        disabled={levelQuestions === null}
        type='button'
        data-te-ripple-init
        data-te-ripple-color='light'
        style={{
          backgroundColor: levelQuestions === null ? 'gray' : '',
          pointerEvents: `${levelQuestions === null ? 'none' : 'auto'}`
        }}
        className='mt-5 text-center rounded-full bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:font-bold hover:bg-primary-600 hover:scale-105 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]'
        onClick={handleClick}
      >
        {categoryQuestions === null && 'Selecciona una categoría'}
        {categoryQuestions !== null && levelQuestions === null && 'Selecciona un nivel'}
        {categoryQuestions !== null && levelQuestions !== null && 'Empezar'}
      </button>

    </div>
  )
}
