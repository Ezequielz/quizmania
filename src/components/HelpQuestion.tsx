
import { FC } from 'react'
import { Question } from '../interfaces'
import { useQuestionsStore } from '../store/questions'
import { BiHelpCircle } from 'react-icons/Bi'

interface Props {
  info: Question
}

export const HelpQuestion: FC<Props> = ({ info }) => {
  const changeHelp = useQuestionsStore(state => state.changeHelp)

  const handleChangeHelp = () => {
    if (info.helpUser !== true) {
      changeHelp(info.id, true)
    }
  }

  return (
    <>
      {/* BOTON DE AYUDA */}
      {
        info.userSelectedAnswer === undefined && info.helpUser !== true && (
          <div className='mt-2 flex justify-center items-center'>
            <button
              className='text-xl font-medium text-blue-600 hover:text-blue-400 dark:hover:text-blue-300 hover:scale-105'
              type='button'
              onClick={handleChangeHelp}
            >

              <BiHelpCircle />
            </button>
            <span className='ml-2 text-xs text-slate-600 dark:text-slate-400'>Utilizar ayuda reducirá la puntuación final</span>
          </div>
        )
      }

      {/* TEXTO DE AYUDA */}
      {info.helpUser === true && (
        <div className='bg-green-100 text-xs text-slate-700 p-2 rounded-md mt-3 font-bold'>
          <span>{info.help}</span>
        </div>

      )}

    </>
  )
}
