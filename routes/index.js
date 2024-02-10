var express = require('express');
const cors = require('cors')
const MpesaPayment = require('../models/MpesaPayment');
const axios = require('axios').default;


require('dotenv').config();

var router = express.Router();

router.options('*', cors())

const time_Stamp = require('./middleware.js')
let current_timestamp = time_Stamp.timeStamp;




router.post('/confirm-mpesa-payment', cors(), (req, res)=>{
  const s1 = req.body.Msisdn
  var s2 = s1.substring(1);
  const MSISDN = '254'+s2;
  let timeS = current_timestamp()
  MpesaPayment.findOne({MSISDN: MSISDN, Accessed : false}).then(async (payment) => {
    if (payment) {
      const doc = await MpesaPayment.findOneAndUpdate({MSISDN: MSISDN}, {Accessed: true }, {
        new: true
      });
      res.status(200).send({'confirmed': 'Payment Successful'})
    } else {
      res.status(200).send({'none': 'No Payment'})
    }
  }).catch(error => {
    console.log(error)
    res.status(500).send({'ErrorDB': 'Database Error'})
  })
})


router.post('/validation', cors(), async (req, res)=>{
  console.log(req.body.Body.stkCallback.CallbackMetadata)
  if (req.body.Body.stkCallback.ResultCode == 0){
    const TransID = req.body.Body.stkCallback.CallbackMetadata.Item[1].Value
    const TransTime = current_timestamp()
    const TransAmount = req.body.Body.stkCallback.Amount
    const MSISDN = req.body.Body.stkCallback.Msisdn

    
    const newMpesaPayment = new MpesaPayment({TransID: TransID, TransTime: TransTime, TransAmount: TransAmount, MSISDN: MSISDN})
    
    try {
      await newMpesaPayment.save()
      res.status(200)
    } catch (error) {
      console.log(error)
      res.status(500)
    }
  }else{
    res.status(100)
  }
})



router.post('/query-manual-payment', cors(), async function(req, res){
  const MSISDN = req.body.phone
  let timeS = current_timestamp()

  MpesaPayment.findOne({MSISDN: MSISDN, TransTime :{$regex:`${timeS.slice(0,8)}`}}).then((payment) => {
    if (payment) {
      res.status(200).send({'confirmed': 'Payment Successful'})
      
    } else {
      res.status(200).send({'none': 'No Payment'})
      
    }
  }).catch(error => {
    console.log(error)
    res.status(500).send({'ErrorDB': 'Database Error'})
  })
})







module.exports = router;
