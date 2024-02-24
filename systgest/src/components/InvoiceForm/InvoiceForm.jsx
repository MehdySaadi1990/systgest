import styled from 'styled-components'
import { useState } from 'react'

const InvoiceArea = styled.div`
width:100%;
height:auto;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
`
const HeaderBloc = styled.div`
width:98%;
height:auto;
display:flex;
justify-content:space-between;
`

const HeaderForm = styled.form`
width:60%;
display:flex;
flex-direction:column;
justify-content:space-around;
`
const ButtonBloc = styled.div`
width:40%;
height:auto;
display:flex;
flex-direction:column;
justify-content:space-around;
align-items:flex-end;
`
const Button = styled.button`
width:50%;
height:auto;
padding:10px 0 10px 0;
font-weight:bold
`
const OrderForm = styled.form`
width:98%;
height:50px;
margin:10px;
display:flex;
flex-direction:column;
flex-wrap:wrap;
justify-content:space-between;
`
const Label = styled.label`
`
const HeaderInput = styled.input`
width:300px;
text-align:center;
`
const InfoInput = styled.input`
text-align:left;
&:nth-child(0n+2){
    width:10%;
    }
&:nth-child(0n+4){
    width:60%;
    }
&:nth-child(0n+6){
    width:10%;
    }
&:nth-child(0n+8){
    width:10%;
    }
`
const OrderResume = styled.table`
width:98%;
border:1px solid black;
height:400px;
display:flex;
flex-direction: column;
`
const OrderResumeHeader = styled.thead`
width:100%;
display:flex;
justify-content:space-around;
`
const TableHeader = styled.th`
text-align:center;
&:nth-child(0n+1){
    width:10%;
    }
&:nth-child(0n+2){
    width:60%;
    }
&:nth-child(0n+3){
    width:10%;
    }
&:nth-child(0n+4){
    width:10%;
    }
`
const OrderResumeBody = styled.tbody`
display:flex;
flex-direction:column;
justify-content:space-around;
overflow-y:scroll;
overflow-x:hidden;
`
const ValidButton = styled.button`
width:20%;
height:50px;
align-self:flex-end;
margin-right:10px;
font-size:20px;
font-weight:bold
`

function InvoiceForm({type}) {
    const[invoiceNumber, setInvoiceNumber]=useState(1)
    const[ref, setRef]=useState()
    const[designation, setDesignation]=useState()
    const[quantity, setQuantity]=useState()
    const[price, setPrice]=useState()

    function validProduct(ref, designation, quantity, price) {
        const tablebody = document.getElementById('resumeBody')
        const line = document.createElement("td")
        line.style.width='100%'
        line.style.display='flex'
        line.style.justifyContent='space-around'
        const reference = document.createElement("p")
        reference.textContent=`${ref}`
        reference.style.width = "10%"
        reference.style.textAlign = "center"
        const design = document.createElement("p")
        design.textContent = `${designation}`
        design.style.width = "60%"
        design.style.textAlign = "center"
        const quantite = document.createElement("p")
        if(quantity===undefined || quantity===''){
            quantite.textContent = '1'
        }else{
            quantite.textContent = `${quantity}`
        }
        quantite.style.width = "10%"
        quantite.style.textAlign = "center"
        const prix = document.createElement("p")
        if(price===undefined || price===''){
            prix.textContent = '0'
        }else{
            prix.textContent = `${price}`
        }
        prix.style.width = "10%"
        prix.style.textAlign = "center"
        line.appendChild(reference)
        line.appendChild(design)
        line.appendChild(quantite)
        line.appendChild(prix)
        tablebody.appendChild(line)
    }
    return(
        <InvoiceArea>
            <HeaderBloc>
            <HeaderForm method='post'>
                <Label for='number'>N° {type}</Label>
                <HeaderInput id='number' type='number' value={invoiceNumber}/>
                <Label for='client'>Client</Label>
                <HeaderInput id='client' type='text'/>
                <Label for='name'>Nom</Label>
                <HeaderInput id='name' type='text'/>
                <Label for='date'>Date</Label>
                <HeaderInput id='date' type='date' defaultValue={Date()}/>
            </HeaderForm>
            <ButtonBloc>
                <Button>Imprimer {type}</Button>
                {type==='Facture'&&
                <Button>Générer un règlement</Button>}
            </ButtonBloc>
            </HeaderBloc>
            <OrderForm>
            <Label for='ref'>Référence</Label>
                <InfoInput id='ref' type='text' placeholder='Ref' defaultValue={ref}
                 onChange={(e)=>setRef(e.target.value)} 
                 onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }}/>
                <Label for='designation'>Désignation</Label>
                <InfoInput id='designation' type='text' placeholder='Designation'
                onChange={(e)=>setDesignation(e.target.value)} 
                onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }}/>
                <Label for='quantite'>Quantité</Label>
                <InfoInput id='quantite' type='text' placeholder='Qty'
                onChange={(e)=>setQuantity(e.target.value)}
                onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }} />
                <Label for='prix'>Prix</Label>
                <InfoInput id='prix' type='text' placeholder='Prix'
                onChange={(e)=>setPrice(e.target.value)}
                onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }} />
            </OrderForm>
            <OrderResume>
                <OrderResumeHeader>
                    <TableHeader scope='col'>Réference</TableHeader>
                    <TableHeader scope='col'>Désignation</TableHeader>
                    <TableHeader scope='col'>Quantité</TableHeader>
                    <TableHeader scope='col'>Prix</TableHeader>
                </OrderResumeHeader>
                <OrderResumeBody id='resumeBody'>

                </OrderResumeBody>
            </OrderResume>
            <ValidButton>Valider</ValidButton>
        </InvoiceArea>
    )
}

export default InvoiceForm