const router = require('express').Router();
const jwt = require('jsonwebtoken');
let Garden = require('../models/garden');

router.post('/add', (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const size = req.body.size;
  const postcode = req.body.postcode;
  const type = req.body.type;


  const newGarden = new Garden({
    title,
    description,
    size,
    postcode,
    type,
  });

  newGarden.save()
    .then(() => res.json('Garden added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;