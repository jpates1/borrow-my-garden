const router = require('express').Router();
const TokenGenerator = require("../models/token_generator");
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

router.get('/', async (req, res) => {
  try {
    const gardens = await Garden.find({});
    const token = await TokenGenerator.jsonwebtoken(req._id);
    res.status(200).json({ gardens: gardens, token: token });
    console.log('hi there')
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;