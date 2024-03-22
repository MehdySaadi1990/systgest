import styled from "styled-components"
import BlocMenu from '../../components/BlocMenu/BlocMenu'
import ListeFactureLogo from '../../components/assets/listeFacturesLogo.png'
import InventaireLogo from '../../components/assets/livreInventaireLogo.png'
import CaisseLogo from '../../components/assets/etatCaisseLogo.png'

const EtatArea = styled.div`
width:100%;
height:auto;
justify-content:space-around;
align-items:center;
background-color:#E5E0E0`



function Etats() {
    return(
        <EtatArea>
            <BlocMenu name='Liste des Ventes' image={ListeFactureLogo}/>
            <BlocMenu name='Liste des Achats' image={ListeFactureLogo}/>
            <BlocMenu name='Livre Inventaire' image={InventaireLogo}/>
            <BlocMenu name='Etat Caisse' image={CaisseLogo}/>
        </EtatArea>
    )
}

export default Etats