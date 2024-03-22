import styled from "styled-components"

const ContextMenuArea = styled.div`
width:200px;
height:auto;
border: 1px solid black;
position:absolute;
z-index: 1000000;
display:none;
${(props) => props.$isActive&&`
display: flex;
background-color:white
` }
`
const Menu = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:flex-start;
`
const Selection = styled.span`
width:100%;
height:30px;
list-style-type:none;
&:hover{
    cursor:pointer;
    background-color:grey
}
`


function ContextMenu({active}) {
    return(
                <ContextMenuArea id='contextMenu' $isActive={active}>
                        <Menu>
                            <Selection onClick={(e)=>{
                                e.preventDefault()
                                const elements = document.getElementsByClassName('active')
                                const elementsArray = Array.from(elements)
                                elementsArray.forEach(element => {
                                    element.remove()
                                })
                            }}>Supprimmer la ligne</Selection>
                            <Selection>Consulter l'article</Selection>
                            <Selection>Modifier la ligne</Selection>
                        </Menu>
                    </ContextMenuArea>
    )
}

export default ContextMenu