const express = require('express');
const router = express.Router();
const { Message } = require('../models');
const { authenticate } = require('../middleware/authenticate');

// Create a new message
router.post('/', authenticate, async (req, res) => {
  try {
    const message = await Message.create({
      content: req.body.content,
      senderId: req.user.id,
      recipientId: req.body.recipientId
    });
    res.status(201).json(message);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Get all messages between two users
router.get('/:recipientId', authenticate, async (req, res) => {
  try {
    const messages = await Message.findAll({
      where: {
        senderId: req.user.id,
        recipientId: req.params.recipientId
      },
      order: [['createdAt', 'ASC']]
    });
    res.status(200).json(messages);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
