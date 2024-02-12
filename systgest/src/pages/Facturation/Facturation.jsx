import styled from "styled-components"
import BlocMenu from '../../components/BlocMenu/BlocMenu'
import InvoiceLogo from '../../components/assets/invoiceLogo.png'

const FacturationArea = styled.div`
width:100%;
height:auto;
justify-content:space-around;
align-items:center;
background-color:#E5E0E0`


function Facturation() {
    return(
        <FacturationArea>
            <BlocMenu name='Devis' image={InvoiceLogo}/>
            <BlocMenu name='Bon de commande' image={InvoiceLogo}/>
            <BlocMenu name='Facturation' image={InvoiceLogo}/>
            <BlocMenu name='Retour Client' image={InvoiceLogo}/>
        </FacturationArea>
    )
    
}

export default Facturation