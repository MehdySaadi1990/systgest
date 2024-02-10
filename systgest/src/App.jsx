import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import Header from './components/Header/Header'
import Facturation from './pages/Facturation/Facturation'
import Stock from './pages/Stock/Stock'
import AchatsDepenses from './pages/AchatsDepenses/AchatsDepenses'
import Etats from './pages/Etats/Etats'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', sans-serif;
    }
`
function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Header/>
    <Routes>
    <Route path='/Facturation' element={<Facturation/>}/>
    <Route path='/Stock' element={<Stock/>}/>
    <Route path='/AchatsDepenses' element={<AchatsDepenses/>}/>
    <Route path='/Etats' element={<Etats/>}/>
    </Routes>
    </Router>
  );
}

export default App;
