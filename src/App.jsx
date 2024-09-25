import './index.css'
import Header from './components/Header'
import Conocimientos from './components/Conocimientos'
import Wave from './components/Wave'
import ProyectLayout from './components/ProyectLayout'

function App() {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-start pb-20'>
        <Header />
        <ProyectLayout />
        <Conocimientos />
      </div>
    </>
  )
}

export default App
