import {BrowserRouter as Router} from 'react-router-dom'
import {Routes, Route} from 'react-router-dom'
import {createGlobalStyle} from 'styled-components'
import Header from './components/Header/Header'
import Facturation from './pages/Facturation/Facturation'
import Stock from './pages/Stock/Stock'
import AchatsDepenses from './pages/AchatsDepenses/AchatsDepenses'
import Etats from './pages/Etats/Etats'
import Devis from './pages/Facturation/Devis/Devis'
import Facture from './pages/Facturation/Facture/Facture'
import BonDeCommande from './pages/Facturation/BonDeCommande/BonDeCommande'
import RetourClient from './pages/Facturation/RetourClient/RetourClient'

const GlobalStyle = createGlobalStyle`
    div {
        font-family: 'Montserrat', sans-serif;
        display:flex;
    }
`
function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Header/>
    <Routes>
    <Route path='/' element={<Facturation/>}/>
      <Route path='/Devis' element={<Devis/>}/>
      <Route path='/Facture' element={<Facture/>}/>
      <Route path='/BonDeCommande' element={<BonDeCommande/>}/>
      <Route path='/RetourClient' element={<RetourClient/>}/>
    <Route path='/Stock' element={<Stock/>}/>
    <Route path='/AchatsDepenses' element={<AchatsDepenses/>}/>
    <Route path='/Etats' element={<Etats/>}/>
    </Routes>
    </Router>
  );
}

export default App;
