import { useQuestionsStore } from '../store/questions'
import { Game, StartGame } from './'

export const Home = () => {
  const questions = useQuestionsStore(state => state.questions)
  return (
    <div className=''>
      {questions.length === 0 && <StartGame />}
      {questions.length > 0 && <Game />}
    </div>

  )
}
