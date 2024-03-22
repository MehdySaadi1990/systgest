import styled from 'styled-components'
import { useState } from 'react'
import ContextMenu from '../ContextMenu/ContextMenu'

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
width:49%;
text-align:center;
`
const ClientSelection = styled.select`
width:50%;
`
const ClientOption = styled.option`
width:100%;
text-align:center
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
height:300px;
display:flex;
flex-direction: column;
`
const OrderResumeHeader = styled.thead`
width:100%;
`
const TableRow = styled.tr`
width:100%;
display:flex;
justify-content:space-around;`
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
margin:5px 10px 0 0;
font-size:20px;
font-weight:bold
`
const TotalInvoice = styled.span`
width:25%;
height:auto;
align-self:flex-end;
text-align:center;
font-size:24px;
font-weight:bold;
`

function InvoiceForm({type, doc}) {
        const[contextMenu, setContextMenu]= useState(false)
        const[invoiceNumber, setInvoiceNumber]=useState(1)
        const[selectType, setSelectType]=useState('')
        const[ref, setRef]=useState('')
        const[designation, setDesignation]=useState('')
        const[quantity, setQuantity]=useState(0)
        const[price, setPrice]=useState(0)
        const current = new Date();
        const date = `${current.getDate()}-${current.getMonth()+1}-${current.getFullYear()}`;

    function getTotal() {
        const quantity = document.getElementsByClassName('quantite')
        const quantityTab = Array.from(quantity)
        const price = document.getElementsByClassName('prix')
        const priceTab = Array.from(price)
        var total = 0
        for (let i = 0; i < priceTab.length; i++) {
            total = total + quantityTab[i].value.quantity*priceTab[i].value.price;
        }
        return total
    } 

    function validProduct(ref, designation, quantity, price) {
        const tablebody = document.getElementById('resumeBody')
        const line = document.createElement('td')
        line.setAttribute("class", 'line')
        line.style.width='100%'
        line.style.display='flex'
        line.style.justifyContent='space-around'
        line.style.cursor='default'
        line.style.backgroundColor = 'white'
        line.addEventListener("click", (e)=>{
            e.preventDefault()
            if(line.style.backgroundColor==='white'){
                line.style.backgroundColor = '#01d5ee'
                line.classList.add('active')
            }else{
                line.style.backgroundColor = 'white'
                line.classList.remove('active')
            }
        })
        
        const reference = document.createElement("p")
        reference.textContent=`${ref}`
        reference.style.width = "10%"
        reference.style.textAlign = "center"
        const design = document.createElement("p")
        design.textContent = `${designation}`
        design.style.width = "60%"
        design.style.textAlign = "center"
        const quantite = document.createElement("p")
        quantite.setAttribute("class","quantite")
        if(quantity===undefined || quantity===''){
            quantite.textContent = '1'
            quantite.value = 1
        }else{
            quantite.textContent = `${quantity}`
            quantite.value = {quantity}
        }
        quantite.style.width = "10%"
        quantite.style.textAlign = "center"
        const prix = document.createElement("p")
        prix.setAttribute("class","prix")
        if(price===undefined || price===''){
            prix.textContent = '0'
            quantite.value = 0
        }else{
            prix.textContent = `${price}`
            prix.value = {price}
        }
        prix.style.width = "10%"
        prix.style.textAlign = "center"
        line.appendChild(reference)
        line.appendChild(design)
        line.appendChild(quantite)
        line.appendChild(prix)
        tablebody.appendChild(line)

        const total = document.getElementById('total')
        total.textContent= "Total : " + getTotal() + " FCFA"

        var refer = document.getElementById('ref')
        refer.value=""
        var des = document.getElementById('designation')
        des.value=""
        var qty = document.getElementById('quantite')
        qty.value=0
        var prices = document.getElementById('prix')
        prices.value=0

    }
    
    return(
        <InvoiceArea onClick={(e)=>{
            e.preventDefault()
            setContextMenu(false)}}>
            <HeaderBloc>
            <HeaderForm method='post'>
                <Label htmlFor='number'>N° {doc}</Label>
                <HeaderInput id='number' type='number' defaultValue={invoiceNumber}/>
                <Label htmlFor={type}>{type}</Label>
                {type ==='Client' || type === 'Fournisseur'?<ClientSelection id={type} value={selectType} onChange={(e)=>{
                    setSelectType(e.target.value)
                }}> <ClientOption value=""></ClientOption>
                    <ClientOption value="Particulier">Particulier</ClientOption>
                    <ClientOption value="Professionnel">Professionnel</ClientOption>
                </ClientSelection>:<HeaderInput id='refDocument' type='text'/>}
                <Label htmlFor='name'>Nom</Label>
                <HeaderInput id='name' type='text'/>
                <Label htmlFor='date'>Date</Label>
                <HeaderInput id='date' type='text'  readOnly="readOnly" defaultValue={date}/>
            </HeaderForm>
            <ButtonBloc>
                <Button>Imprimer {type}</Button>
                {type==='Facture'&&
                <Button>Générer un règlement</Button>}
            </ButtonBloc>
            </HeaderBloc>
            <OrderForm>
            <Label htmlFor='ref'>Référence</Label>
                <InfoInput id='ref' type='text' placeholder='Ref' defaultValue={ref}
                 onChange={(e)=>setRef(e.target.value)} 
                 onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }}/>
                <Label htmlFor='designation'>Désignation</Label>
                <InfoInput id='designation' type='text' placeholder='Designation' defaultValue={designation}
                onChange={(e)=>setDesignation(e.target.value)} 
                onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }}/>
                <Label htmlFor='quantite'>Quantité</Label>
                <InfoInput id='quantite' type='text' placeholder='Qty' defaultValue={quantity}
                onChange={(e)=>setQuantity(e.target.value)}
                onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }} />
                <Label htmlFor='prix'>Prix</Label>
                <InfoInput id='prix' type='text' placeholder='Prix' defaultValue={price}
                onChange={(e)=>setPrice(e.target.value)}
                onKeyUp={(e)=>{
                    e.key==="Enter"&&validProduct(ref, designation, quantity, price)
                }} />
            </OrderForm>
            <OrderResume>
                <OrderResumeHeader>
                    <TableRow>
                    <TableHeader scope='col'>Réference</TableHeader>
                    <TableHeader scope='col'>Désignation</TableHeader>
                    <TableHeader scope='col'>Quantité</TableHeader>
                    <TableHeader scope='col'>Prix</TableHeader>
                    </TableRow>
                </OrderResumeHeader>
                <OrderResumeBody id='resumeBody' onContextMenu={(e)=>{
                        e.preventDefault()
                        setContextMenu(!contextMenu)
                        let menu = document.getElementById('contextMenu')
                        let posX = e.clientX
                        let posY = e.clientY
                        menu.style.top = posY + "px"
                        menu.style.left = posX + "px"
                        }}>
                </OrderResumeBody>
            </OrderResume>
            <TotalInvoice id='total'></TotalInvoice>
            <ValidButton onClick={(e)=>{
                e.preventDefault()
                setInvoiceNumber(invoiceNumber+1)
            }}>Valider</ValidButton>
            <ContextMenu  active={contextMenu}/>
        </InvoiceArea>
    )
}

export default InvoiceForm