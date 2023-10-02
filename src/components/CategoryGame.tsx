import { CssLogo, HtmlLogo, JavascriptLogo, TypescriptLogo } from '../assets/svg'
import { CATEGORIES_QUESTIONS } from '../constants'
import { useQuestionsStore } from '../store/questions'

export const CategoryGame = () => {
  const changeCategoryQuestions = useQuestionsStore(state => state.changeCategoryQuestions)
  const categoryQuestions = useQuestionsStore(state => state.categoryQuestions)
  const handleChange = (category: string) => {
    changeCategoryQuestions(category)
  }
  return (
    <div className='p-10'>
      <h2 className='text-2xl font-bold mb-2'>Categoría</h2>
      <ul className='flex gap-4 justify-center items-center'>
        <li>
          <button
            // data-te-ripple-init
            data-te-ripple-color='light'
            style={{}}
            className='m-auto tracking-widest text-xs  rounded-xl font-bold  leading-normal  transition duration-150 ease-in-out focus:ring-0 hover:scale-105 opacity-75 dark:hover:opacity-90'
            onClick={() => handleChange(CATEGORIES_QUESTIONS.HTML)}
          >
            <div className={`m-auto h-16 flex w-max ${categoryQuestions === CATEGORIES_QUESTIONS.HTML ? '' : 'saturate-0 hover:saturate-50'}`}>
              <HtmlLogo />
            </div>
            <strong className='p-1'>HTML5</strong>
          </button>
        </li>
        <li>
          <button
            // data-te-ripple-init
            data-te-ripple-color='light'
            style={{}}
            className='m-auto tracking-widest text-xs  rounded-xl font-bold  leading-normal  transition duration-150 ease-in-out focus:ring-0 hover:scale-105 opacity-75 dark:hover:opacity-90'
            onClick={() => handleChange(CATEGORIES_QUESTIONS.CSS)}
          >
            <div className={`m-auto h-16 flex w-max ${categoryQuestions === CATEGORIES_QUESTIONS.CSS ? '' : 'saturate-0 hover:saturate-50'}`}>
              <CssLogo />
            </div>
            <strong className='p-1'>CSS3</strong>
          </button>
        </li>
        <li>
          <button
            data-te-ripple-color='light'
            style={{}}
            className='m-auto tracking-widest text-xs  rounded-xl font-bold  leading-normal  transition duration-150 ease-in-out focus:ring-0 hover:scale-105 opacity-75 dark:hover:opacity-90'
            onClick={() => handleChange(CATEGORIES_QUESTIONS.JS)}
          >
            <div
              className={`m-auto h-16 flex w-max ${categoryQuestions === CATEGORIES_QUESTIONS.JS ? '' : 'saturate-0 hover:saturate-50'}`}
            >
              <JavascriptLogo />
            </div>
            <strong className='p-1'>JavaScript</strong>
          </button>
        </li>
        <li>
          <button
            // data-te-ripple-init
            data-te-ripple-color='light'
            style={{}}
            className='m-auto tracking-widest text-xs  rounded-xl font-bold   leading-normal  transition duration-150 ease-in-out focus:ring-0 hover:scale-105 opacity-75 dark:hover:opacity-90'
            onClick={() => handleChange(CATEGORIES_QUESTIONS.TS)}
          >
            <div className={`m-auto h-16 flex w-max ${categoryQuestions === CATEGORIES_QUESTIONS.TS ? '' : 'saturate-0 hover:saturate-50'}`}>
              <TypescriptLogo />
            </div>
            <strong className='p-1'>TypeScript</strong>
          </button>
        </li>

      </ul>

    </div>
  )
}
