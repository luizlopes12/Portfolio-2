import './assets/sass/main.scss'
import HomePage from './pages/HomePage/HomePage'
import { Analytics } from '@vercel/analytics/react';
function App() {
  return (
    <>
      <HomePage/>
      <Analytics/>
    </>
  )
}

export default App
