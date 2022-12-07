const Event = require("../models/company");

module.exports = {
  create,
  index,
  detail,
  delete: deleteEvent,
};

async function create(req, res) {
  const event = await Event.create(req.body);
  res.json(event);
}

async function index(req, res) {
  const events = await Event.find({});
  res.json(events);
}

async function detail(req, res) {
  const event = await Event.findById(req.params.id);
  res.json(event);
}

async function deleteEvent(req, res) {
  const event = await Event.findOneAndDelete(req.params.id);
  event.remove();
  res.json(event);
}
