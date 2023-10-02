import { CssLogo, HtmlLogo, JavascriptLogo, TypescriptLogo } from '../assets/svg'
import { CATEGORIES_QUESTIONS } from '../constants'
import { useQuestionsStore } from '../store/questions'

export const Aside = () => {
  const changeCategoryQuestions = useQuestionsStore(state => state.changeCategoryQuestions)

  const handleChange = (category: string) => {
    changeCategoryQuestions(category)
  }
  return (
    <aside className='hidden lg:block absolute  w-[170px] bg-slate-300 dark:bg-gray-900 rounded- p-5 '>
      <div className='pt-10'>

        <h2 className='text-2xl font-bold mb-2'>Categorías</h2>
        <button
          data-te-ripple-init
          data-te-ripple-color='light'
          className='w-full flex items-center gap-1 dark:hover:bg-slate-600 p-2'
          onClick={() => handleChange(CATEGORIES_QUESTIONS.HTML)}
        >
          <div className='h-5 w-5'>
            <HtmlLogo />

          </div>
          <div>

            HTML5
          </div>
        </button>
        <button
          data-te-ripple-init
          data-te-ripple-color='light'
          className='w-full flex items-center gap-1 dark:hover:bg-slate-600 p-2'
          onClick={() => handleChange(CATEGORIES_QUESTIONS.CSS)}
        >
          <div className='h-5 w-5'>
            <CssLogo />

          </div>
          <div>

            CSS3
          </div>
        </button>
        <button
          data-te-ripple-init
          data-te-ripple-color='light'
          className='w-full flex items-center gap-1 dark:hover:bg-slate-600 p-2'
          onClick={() => handleChange(CATEGORIES_QUESTIONS.JS)}
        >
          <div className='h-5 w-5'>
            <JavascriptLogo />

          </div>
          <div>

            JavaScript
          </div>
        </button>
        <button
          data-te-ripple-init
          data-te-ripple-color='light'
          className='w-full flex items-center gap-1 dark:hover:bg-slate-600 p-2'
          onClick={() => handleChange(CATEGORIES_QUESTIONS.TS)}
        >
          <div className='h-5 w-5'>
            <TypescriptLogo />

          </div>
          <div>

            TypeScript
          </div>
        </button>

      </div>
    </aside>
  )
}
