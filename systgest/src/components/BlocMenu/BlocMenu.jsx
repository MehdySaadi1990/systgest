import styled from "styled-components"
import { Link } from "react-router-dom"


const Image = styled(Link)`
width:150px;
height:120px;
background-color:white;
color:black;
text-decoration:none;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:30px;
border:3px solid black;
transform:scale(1);
&:hover{
    transform:scale(1.2);
    transition:all 300ms
}
`
const Logo = styled.img`
width:100%;
height:70%;
object-fit:cover;
position:relative;
top:10px;
`

const SectionName = styled.h3`
font-size:15px;
font-weight:bold;
text-align:center;
`

function BlocMenu({name, image}) {
    return(
            <Image>
            <Logo src={image}/>
            <SectionName>{name}</SectionName>
            </Image>
    )
    
}

export default BlocMenu