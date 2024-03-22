import styled from "styled-components"
import BlocMenu from '../../components/BlocMenu/BlocMenu'
import ExpensesLogo from '../../components/assets/expensesLogo.png'

const AchatDepArea = styled.div`
width:100%;
height:auto;
justify-content:space-around;
align-items:center;
background-color:#E5E0E0`


function AchatsDepenses() {
    return(
        <AchatDepArea>
            <BlocMenu name='Commande Achat' image={ExpensesLogo}/>
            <BlocMenu name='Facture Achat' image={ExpensesLogo}/>
            <BlocMenu name='Saisie Dépense' image={ExpensesLogo}/>
        </AchatDepArea>
    )
}

export default AchatsDepenses