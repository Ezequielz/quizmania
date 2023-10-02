import { Switch } from './Switch'

export const Navbar = () => {
  return (
    <nav className='mx-auto flex  justify-between items-center px-12 pt-6 ' aria-label='Global'>

      {/* Logo */}
      <div className='flex items-center lg:flex-1'>

        <strong className='-skew-y-6 text-3xl text-secondary-dark'>Quiz</strong>
        <div className='-skew-y-6 mt-2 text-red-400'>Manía</div>

      </div>
      <Switch />

    </nav>
  )
}
