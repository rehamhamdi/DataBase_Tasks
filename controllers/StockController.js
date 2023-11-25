const StockOverview= require('../models/Stock')
class StockController{
    

    static async getallStock(req,res){
       var results= await StockOverview.getStock();
       if(results)
       res.send(results)
    }

}
module.exports=StockController