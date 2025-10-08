const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js"); //wrapAsync error of middleware
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");
const reviewColtroller = require("../controllers/reviews.js");

//Reviews route
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewColtroller.createReview)
);

//Delete review route
router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewColtroller.deleteReview)
);

module.exports = router;
