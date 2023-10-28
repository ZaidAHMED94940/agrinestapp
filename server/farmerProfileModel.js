var mongoose = require('mongoose') ;

var farmerProfileSchema = mongoose.Schema(
    {
        farmerName : 
        {
            type:String ,
            required:true ,
        } ,

        farmerEmailAddress : 
        {
            type:String ,
            required:true ,
        } ,

        farmerPassword :
        {
            type:String ,
            required:true ,
        } ,

        farmerAddress :
        {
            type:String ,
            required:true 
        } ,

        farmerMainProducts :
        {
            type:String ,
            required:true 
        }
    }
)

if(mongoose.models['farmerProfiles'])
{
    return mongoose.model('farmerProfiles') ;
}

var farmerProfiles = mongoose.model('farmerProfiles',farmerProfileSchema) ;
module.exports = farmerProfiles ;