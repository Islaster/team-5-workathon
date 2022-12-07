const Review = require("../models/company");

module.exports = {
  create,
  index,
  detail,
  delete: deleteReview,
};

async function create(req, res) {
  const review = await Review.create(req.body);
  res.json(review);
}

async function index(req, res) {
  const reviews = await Review.find({});
  res.json(reviews);
}

async function detail(req, res) {
  const review = await Review.findById(req.params.id);
  res.json(review);
}

async function deleteReview(req, res) {
  const review = await Review.findOneAndDelete(req.params.id);
  review.remove();
  res.json(review);
}
