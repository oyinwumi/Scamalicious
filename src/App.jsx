import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
import LandingPage from './pages/LandingPage';



function App() {

  return (
  <div className="w-full overflow-x-hidden ">
    <Router>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
      </Routes>
    </Router>

  </div>
  )
}

export default App
