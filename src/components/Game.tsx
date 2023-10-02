
import { FooterGame, HeaderGame, QuestionGame } from './'

export const Game = () => {
  return (
    <section className=''>
      <header className='flex justify-center items-center'>
        <HeaderGame />
      </header>
      <main className='flex justify-center'>
        <QuestionGame />
      </main>
      <footer className='flex justify-center content-center mt-5'>
        <FooterGame />
      </footer>
    </section>
  )
}
