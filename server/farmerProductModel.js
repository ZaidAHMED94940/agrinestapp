var mongoose = require('mongoose') ;

var farmerProductSchema = mongoose.Schema(
    {
        farmerProductName : 
        {
           type:String ,
           required:true 
        } ,

        farmerProductRate :
        {
            type:String ,
            required:true 
        } ,
    }
)

if(mongoose.models['farmerProducts']){
    return mongoose.model('farmerProducts') ;
}

var farmerProducts = mongoose.model('farmerProducts',farmerProductSchema) ;
module.exports = farmerProducts  ;