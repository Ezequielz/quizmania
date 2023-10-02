import { FooterGame } from '.'
import { useQuestions } from '../hooks'
import { FcHighPriority, FcOk } from 'react-icons/fc'

export const ModalEndGame = () => {
  const { stats } = useQuestions()
  const { correct, incorrect } = useQuestions()
  return (
    <div
      data-te-modal-init
      className='fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none'
      id='staticBackdrop'
      data-te-backdrop='static'
      data-te-keyboard='false'
      tabIndex={-1}
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div
        data-te-modal-dialog-ref
        className='pointer-events-none relative w-auto translate-y-[-50px] opacity-100 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]'
      >
        <div
          className='min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-slate-700'
        >
          <div
            className='p-5 text-center'
          >
            <h5
              className='text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200'
              id='exampleModalLabel'
            >
              Quizz terminado!!!
            </h5>

          </div>

          <div data-te-modal-body-ref className='relative p-4 text-center'>
            <p>Felicitaciones! terminaste el Quizz con este resultado:</p>
            <div className='flex lg:flex-row justify-center gap-2 items-center w-full h-full mb-5'>
              <div className='flex items-center '>
                <FcOk />
                <strong>{`${correct} ${correct === 1 ? 'correcta' : 'correctas'} -`}</strong>
              </div>
              <div className='flex items-center '>
                <FcHighPriority />
                <strong>{` ${incorrect} ${incorrect === 1 ? 'incorrecta' : 'incorrectas'}`} </strong>
              </div>
            </div>
            <strong className='text-xl text-[#e7c83d]'>{stats} Puntos!</strong>
            <FooterGame />
          </div>

          <div
            className='flex flex-shrink-0 flex-wrap items-center  justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50'
          >
            <button
              type='button'
              className='inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200'
              data-te-modal-dismiss
              data-te-ripple-init
              data-te-ripple-color='light'
            >
              Revisar Resultados
            </button>

          </div>
        </div>
      </div>
    </div>
  )
}
