import {useState} from 'react' ;
import { useNavigate } from 'react-router-dom';
import axios from 'axios' ;
import {message} from 'antd' ;

const FarmerComplaint = () => 
{
   const [applicantName1, setApplicantName1] = useState('') ;
   const [applicantStreet1, setApplicantStreet1] = useState('') ;
   const [applicantCity1, setApplicantCity1] = useState('') ;
   const [applicantContact1,setApplicantContact1] = useState('')
   const [applicantComplaint1,setApplicantComplaint1] = useState('') ;
   const [buyerName,setBuyerName] = useState('') ;
   const [policeName, setPoliceName] = useState('')  ;
   const [policeAddress,setPoliceAddress] = useState('') ;
   const [productName1,setProductName1] = useState('') ;

   var navg = useNavigate()

   const handleBuyerComplaint = async(e) => {
      e.preventDefault() ;

    try {  
        var res = await axios.post("http://localhost:3500/v4/api/farmerComplaints/postFarmerComplaint", {
           applicantName1:applicantName1 , applicantStreet1:applicantStreet1 ,applicantCity1:applicantCity1 ,applicantContact1:applicantContact1,applicantComplaint1:applicantComplaint1,buyerName:buyerName,policeName:policeName,policeAddress:policeAddress,productName1:productName1
      })
      if(res.data.success)
      {
          message.success("Successfully registered your complaint ") ;
          navg("/") ;
      }
   }
   catch(error) 
   {
      message.error(" Server side error occured ") ;
   }

}

    return (
        <div className = "Complaint">
            <h1 className = "complaintHeading">Farmer Complaint</h1>
           <form>
            <p className = "complaintPara">
            <input type = 'text' value = {applicantName1} className = 'complaintLabel' placeholder = 'Applicant name'  onChange = {(e) => setApplicantName1(e.target.value)}/>
            <br/>
            <input type = 'text' value = {applicantStreet1} className = 'complaintLabel' placeholder = 'Street name'  onChange = {(e) => setApplicantStreet1(e.target.value)}/>
            <br/>
            <input type = 'text' value = {applicantCity1} className = 'complaintLabel' placeholder = 'City name'  onChange = {(e) => setApplicantCity1(e.target.value)}/>
            <br/>
            <br/>
            To
            <br/>
            <input type = 'text' value = {policeName} className = 'complaintLabel' placeholder = 'Officer Name'  onChange = {(e) => setPoliceName(e.target.value)}/> 
            <br/>
            <input type = 'text' value = {policeAddress} className = 'complaintLabel' placeholder = 'Officer Address'  onChange = {(e) => setPoliceAddress(e.target.value)}/>
            <br/>
            <br/>
            Subject :- <input type = 'text' value = {applicantComplaint1} className = 'complaintLabel' placeholder = 'Complaint here'  onChange = {(e) => setApplicantComplaint1(e.target.value)}/>
            <br/>
            <br/>
            Dear Sir ,
            I am writing to bring to your attention a pressing issue that concerns the exploitation of us by  buyers within our community.
            Farmers being subjected to exploitation by the buyer <input type = 'text' value = {buyerName} className = 'complaintLabel' placeholder = 'Buyer Name'  onChange = {(e) => setBuyerName(e.target.value)}/>  who purchase agricultural products at prices significantly below the fair market rates.
            These practices have had a severe impact on the livelihoods of our hardworking farmers and have created a climate of economic distress within our agricultural community.
            They had significantly reduced the price of item  <input type = 'text' value = {productName1} className = 'complaintLabel' placeholder = 'Product name'  onChange = {(e) => setProductName1(e.target.value)}/>. I expect that you take an action as quick as possible
            <br/>
            <br/>
            For more details contact me on :- <input type = 'text' value = {applicantContact1} className = 'complaintLabel' placeholder = 'Contact No'  onChange = {(e) => setApplicantContact1(e.target.value)}/>
            <br/>
            <br/>
            <br/>
            Your's faithfully 
            <br/>
            {applicantName1}
            <br/>
            </p>
            <br/>
            <br/>
            <button type="button" className="finalPageButton" onClick = {handleBuyerComplaint}> 
             Submit 
            </button>    
            </form>   
        </div> 
    )
}

export default FarmerComplaint ;