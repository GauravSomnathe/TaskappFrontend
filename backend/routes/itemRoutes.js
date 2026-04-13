const express = require('express');
const router = express.Router();
const {
  getItems,
  createItem,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

// GET /items - Get all items
router.get('/', getItems);

// POST /items - Create a new item
router.post('/', createItem);

// PUT /items/:id - Update an item
router.put('/:id', updateItem);

// DELETE /items/:id - Delete an item
router.delete('/:id', deleteItem);

module.exports = router;