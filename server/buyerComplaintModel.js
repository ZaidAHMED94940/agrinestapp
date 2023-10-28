var mongoose = require('mongoose') ;

var buyerComplaintSchema = mongoose.Schema(
    {
        applicantName : {
            type:String ,
            required:true ,
        } ,

        applicantStreet : {
            type:String ,
            required:true ,
        } ,

        applicantCity : {
            type:String ,
            required:true ,
        } ,

        applicantContact : {
            type:String ,
            required:true ,
        } ,

        applicantComplaint : {
            type:String ,
            required:true ,
        } ,

        farmerName : {
            type:String ,
            required:true ,
        } ,

        farmerAddress : {
            type:String ,
            required:true ,
        } ,

        productName : {
            type:String ,
            required:true ,
        }


    }
)

if(mongoose.models['buyerComplaints']){
    return mongoose.model('buyerComplaints')
} 

var buyerComplaints = mongoose.model('buyerComplaints',buyerComplaintSchema) ;

module.exports = buyerComplaints ;