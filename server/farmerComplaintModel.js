var mongoose = require('mongoose') ;

var farmerComplaintSchema = mongoose.Schema(
    {
        applicantName1 : {
            type:String ,
            required:true ,
        } ,

        applicantStreet1 : {
            type:String ,
            required:true ,
        } ,

        applicantCity1 : {
            type:String ,
            required:true ,
        } ,

        applicantContact1 : {
            type:String ,
            required:true ,
        } ,

        applicantComplaint1 : {
            type:String ,
            required:true ,
        } ,

        buyerName : {
            type:String ,
            required:true ,
        } ,

        policeName : {
            type:String ,
            required:true ,
        } ,

        policeAddress : {
            type:String ,
            required:true ,
        } ,

        productName1 : {
            type:String ,
            required:true ,
        }
    }
)
if(mongoose.models['farmerComplaints']){
    return mongoose.model('farmerComplaints')
} 

var farmerComplaints = mongoose.model('farmerComplaints',farmerComplaintSchema) ;

module.exports = farmerComplaints ;