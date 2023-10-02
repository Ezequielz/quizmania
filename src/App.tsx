
import { useEffect } from 'react'
import { Home, QuizzLayout } from './components'
import {
  initTE,
  Ripple
} from 'tw-elements'

function App () {
  useEffect(() => {
    initTE({ Ripple })
  }, [])
  return (
    <QuizzLayout>
      <Home />
    </QuizzLayout>
  )
}

export default App
