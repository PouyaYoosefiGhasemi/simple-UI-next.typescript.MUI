import {useState} from "react"  
import ProposalCard from "./ProposalCard"


const OfferCards =()=>{
interface offerStructure {
    id : number
    cost : number
    users : number
    storage : string
    support : string
    action : string

}
    const [Offer, setOffer] = useState<offerStructure[]>([
    {id : 1 , cost : 0 , users : 10 , storage : "2 GB" , support : "Email" , action : "SIGN UP FOR FREE"},
    {id : 2 , cost : 15 , users : 20 , storage : "10 GB" , support : "Priority email", action : "GET STARTED"},
    {id : 3 , cost : 30 , users : 50 , storage : "30 GB" , support : "Phone & email" , action : "CONTACT US"},
    
])

const finalOffers = Offer.map((value)=>{
return(
    <ProposalCard
    cost={value.cost}
    users={value.users}
    storage={value.storage}
    support={value.support}
    action={value.action}
   
    />
)
})
return(
    {finalOffers}
)
}

export default OfferCards