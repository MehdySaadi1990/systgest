import styled from "styled-components"
import BlocMenu from '../../components/BlocMenu/BlocMenu'
import StockLogo from '../../components/assets/stockLogo.png'

const StockArea = styled.div`
width:100%;
height:auto;
justify-content:space-around;
align-items:center;
background-color:#E5E0E0`

function Stock() {
    return(
        <StockArea>
            <BlocMenu name='Entrée de Stock' image={StockLogo}/>
            <BlocMenu name='Sortie de stock' image={StockLogo}/>
            <BlocMenu name='Tranfert de Dépôt' image={StockLogo}/>
            <BlocMenu name='Création de Dépôt' image={StockLogo}/>
        </StockArea>
    )
}

export default Stock