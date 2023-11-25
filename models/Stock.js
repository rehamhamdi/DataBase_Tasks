const db = require("../config/db");
class StockOverview {
  static async getStock() {
    return new Promise((resolve) => {
      db.query("select* from menuitems", [], (err, result) => {
        if (!err) resolve(result);
      });
    });
  }
}
module.exports = StockOverview;
