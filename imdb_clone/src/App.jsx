import { BrowserRouter, Routes ,Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Movies from './components/Movies'
import Watchlist from './components/Watchlist'
import Banner from './components/Banner'

function App() {



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<><Banner/><Movies /></>} />
          <Route path='/watchlist' element={<Watchlist/>} />
          
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
