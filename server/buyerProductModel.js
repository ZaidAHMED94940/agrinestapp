var mongoose = require('mongoose') ;

var buyerProductSchema = mongoose.Schema(
    {
        productQuantity : {
            type:String  ,
            required:true ,
        } ,

        shippingLocation : {
            type:String ,
            required:true ,
        }
    }
)

if(mongoose.model['buyerProducts'])
{ 
    return mongoose.model('buyerProducts') ;
}

var buyerProducts = mongoose.model('buyerProducts',buyerProductSchema) ;
module.exports = buyerProducts ;