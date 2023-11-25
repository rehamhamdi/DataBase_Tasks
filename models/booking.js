const db = require("../config/db");
class BookingOverview {
  static async getBooking() {
    return new Promise((resolve) => {
      db.query("select* from bookings", [], (err, result) => {
        if (!err)
         resolve(result);
      });
    });
  }
}
module.exports = BookingOverview;
