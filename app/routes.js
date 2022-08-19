const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// BORDER RESPONSE

// SMS answer
router.post('/invites-and-reminders/border-response', function(req, res) {

  var borderResponse = req.session.data['response']

  if (borderResponse == "Yes" || borderResponse == "YES" || borderResponse == "yes" || borderResponse == "y" || borderResponse == "Y") {
    res.redirect('/invites-and-reminders/border-response/yes--sms')
  } else if (borderResponse == "No" || borderResponse == "NO" || borderResponse == "no" || borderResponse == "n" || borderResponse == "N") {
    res.redirect('/invites-and-reminders/border-response/no--sms')
  } else {
    res.redirect('/invites-and-reminders/border-response/in-country--sms')
  }

})

// Compliance question
router.post('/confirmation/border-response', function(req, res) {

  var compliance = req.session.data['compliance']

  if (compliance == "Yes") {
    res.redirect('/confirmation/border-response/compliant')
  } else {
    res.redirect('/confirmation/border-response/non-compliant')
  }

})

// PERSONAL DETAILS

// Proxy
router.post('/personal-details/proxy/answer', function(req, res) {

  var proxy = req.session.data['proxy']

  if (proxy == "Yes") {
    res.redirect('/personal-details/contact-details/contact-preference')
  } else {
    res.redirect('/personal-details/proxy/name')
  }

})

module.exports = router
