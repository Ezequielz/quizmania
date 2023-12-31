import { FC } from 'react'
import { Navbar } from './Navbar'
import { Footer } from './'

interface Props {
  children: React.ReactNode
}

export const QuizzLayout: FC<Props> = ({ children }) => {
  return (
    <div className='font-Montserrat min-h-screen '>
      <header>
        <Navbar />
      </header>
      <main className='min-h-[80vh]'>
        {children}
      </main>

      <footer className='relative w-full'>
        <Footer />
      </footer>

    </div>
  )
}
