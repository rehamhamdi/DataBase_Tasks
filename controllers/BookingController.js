const bookingOverview= require('../models/booking')
class BookingController{
    

    static async getallBooking(req,res){
       var results= await bookingOverview.getBooking();
       if(results)
       res.send(results)
    }

}
module.exports=BookingController