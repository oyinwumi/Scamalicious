import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Download from './pages/Download';
import Terms from './pages/Terms';
import Disclaimer from './pages/Disclaimer';
import Privacy from './pages/Privacy';



function App() {

  return (
  <div className="w-full overflow-x-hidden  ">
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/download' element={<Download/>}/>
        <Route path='/privacy' element={<Privacy/>}/>
        <Route path='/disclaimer' element={<Disclaimer/>}/>
        <Route path='/terms' element={<Terms/>}/>
      </Routes>
    </Router>

  </div>
  )
}

export default App
