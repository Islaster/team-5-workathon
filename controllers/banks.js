const Bank = require("../models/company");

module.exports = {
  create,
  index,
  detail,
  delete: deleteBank,
};

async function create(req, res) {
  const bank = await Bank.create(req.body);
  res.json(bank);
}

async function index(req, res) {
  const banks = await Bank.find({});
  res.json(banks);
}

async function detail(req, res) {
  const bank = await Bank.findById(req.params.id);
  res.json(bank);
}

async function deleteBank(req, res) {
  const bank = await Bank.findOneAndDelete(req.params.id);
  bank.remove();
  res.json(bank);
}
