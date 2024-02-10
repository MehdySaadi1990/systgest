import styled from "styled-components";
import LogoPix from '../assets/logo512.png'
import { Link } from "react-router-dom";

const HeaderSpace = styled.div`
width:300px;
height:700px;
margin:0;
background-color:black;
color:white;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center`

const Logo = styled.img`
width:50%;
height:150px;
`
const NavBar = styled.nav`
width:100%;
height:200px;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:center
`
const NavLink = styled(Link)`
color:white;
cursor:pointer;
text-decoration:underline;
text-decoration-color:black;
transition:text-decoration-color 1s;
&:hover{
    text-decoration-color:white;
}
`
function Header() {
    return(
        <HeaderSpace>
            <Logo src={LogoPix} alt="Logo"/>
            <NavBar>
                <NavLink to='/Facturation'>Facturation</NavLink>
                <NavLink to='/Stock'>Gestion des Stocks</NavLink>
                <NavLink to='/AchatsDepenses'>Achats / Dépenses</NavLink>
                <NavLink to='/Etats'>Etats</NavLink>
            </NavBar>
        </HeaderSpace>
    )
    
}

export default Header