import './index.css'
import Header from './components/Header'
import Conocimientos from './components/Conocimientos'
import Wave from './components/Wave'
import ProyectLayout from './components/ProyectLayout'


function App() {
  return (
    <>
      <div className= "flex gap-28 w-full flex-col items-center justify-center py-20">
        <Wave />
        <Header />
        <ProyectLayout />
        <Conocimientos />
      </div>
    </>
  )
}

export default App
