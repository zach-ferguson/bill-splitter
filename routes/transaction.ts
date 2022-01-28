import * as express from 'express';
let router = express.Router();
import { Transaction, TransactionModel } from '../src/models/Transaction';

/* GET home page. */
router.get('/', async function(req, res, next) {
  let transactions = await TransactionModel.find();

  res.send(transactions);
});

router.post('/', async function(req, res, next) {
  let $ = req.body;

  let transaction = new TransactionModel({
    payer: $.payer,
    payees: $.payees,
    date: $.date ? $.date : new Date(),
    memo: $.memo,
    amount: $.amount
  })
  await transaction.save();

  res.send(transaction);
});

module.exports = router;
