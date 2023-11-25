const express = require("express");
const router = require("express").Router();
const bookingController = require("../controllers/BookingController");

const StockController = require("../controllers/StockController");

router.get("/AllBookingOverview", bookingController.getallBooking);

router.get("/AllStockOverview", StockController.getallStock);

module.exports = router;
