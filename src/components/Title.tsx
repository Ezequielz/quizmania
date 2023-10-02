import { useQuestionsStore } from '../store/questions'

export const Title = () => {
  const categoryQuestions = useQuestionsStore(state => state.categoryQuestions)

  return (
    <header className='flex justify-center content-center items-center'>
      {
          categoryQuestions !== null
            ? (
              <>
                <h1 className='text-3xl font-bold text-center '>Preguntas Sobre {categoryQuestions}</h1>

              </>
              )
            : <h2>Selecciona una categoría</h2>

        }
    </header>
  )
}
