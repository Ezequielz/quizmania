import { useQuestionsStore } from '../store/questions'
import SyntaxHighlighter from 'react-syntax-highlighter'
import { gruvboxDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'
import { getBGColor } from '../helpers'
import { HelpQuestion, ModalEndGame } from '.'
import { useCounter } from '../hooks'
import {
  initTE,
  Modal
} from 'tw-elements'
export const QuestionGame = () => {
  initTE({ Modal })

  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)
  const counter = useCounter()
  const info = questions[currentQuestion]
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)
  const handleSelectAnswer = (answerIndex: number) => () => {
    selectAnswer(info.id, answerIndex, counter)
    // if (currentQuestion === questions.length - 1) {
    //   console.log('game over')
    // }
  }

  return (

    <article className='max-w-[350px] lg:max-w-[500px] mx-auto rounded-lg bg-slate-300 p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-slate-900'>
      <h5 className='text-lg font-bold mb-2'>{info.question}</h5>
      {info.code != null && info.code.length > 0 && (
        <SyntaxHighlighter language='javascript' style={gruvboxDark}>
          {info.code}
        </SyntaxHighlighter>
      )}
      <ul className='mt-2'>
        {info.answers.map((answer, index) => (
          <li key={index} className='mt-1'>
            <button
              disabled={typeof info.userSelectedAnswer === 'number'}
              data-te-ripple-init
              data-te-toggle={`${currentQuestion === questions.length - 1 ? 'modal' : 'none'}`}
              data-te-target='#staticBackdrop'
              data-te-ripple-color='light'
              style={{
                backgroundColor: getBGColor(info, index),
                pointerEvents: `${typeof info.userSelectedAnswer === 'number' ? 'none' : 'auto'}`
              }}
              className='p-2 w-full font-semibold  text-white rounded-lg dark:bg-slate-800  bg-cyan-600
                  dark:hover:bg-slate-700 hover:bg-cyan-500'
              onClick={handleSelectAnswer(index)}
            >
              {answer}
            </button>
          </li>
        ))}
      </ul>
      <HelpQuestion info={info} />

      <ModalEndGame />
    </article>

  )
}
