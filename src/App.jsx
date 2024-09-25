import './index.css'
import Header from './components/Header'
import Conocimientos from './components/Conocimientos'
import ProyectLayout from './components/ProyectLayout'
import starsBg from './assets/stars.svg'

function App() {
  return (
    <>
      <div className='flex w-full flex-col items-center justify-start pb-20'>
        <img
          className='opacity-10 absolute bg-gradient-to-t from-white to-transparent'
          src={starsBg}
          alt='fondo de estrellas'
        />
        <Header />
        <ProyectLayout />
        <Conocimientos />
      </div>
    </>
  )
}

export default App
